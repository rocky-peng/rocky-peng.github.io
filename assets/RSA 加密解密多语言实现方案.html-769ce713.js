import{_ as t,$ as p,a0 as l,a1 as n,a3 as e,a4 as i,a5 as c,a2 as s,w as o}from"./framework-b3a0f150.js";const u={},r=c(`<h2 id="生成相关文件" tabindex="-1"><a class="header-anchor" href="#生成相关文件" aria-hidden="true">#</a> 生成相关文件</h2><ol><li>生成模长为1024bit的私钥文件private_key.pem</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> rsa_multi_language

openssl genrsa <span class="token parameter variable">-out</span> private_key.pem <span class="token number">1024</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>生成IOS证书</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>. 生成证书请求文件rsaCertReq-IOS.csr
openssl req <span class="token parameter variable">-new</span> <span class="token parameter variable">-key</span> private_key.pem <span class="token parameter variable">-out</span> rsaCerReq-IOS.csr

<span class="token number">2</span>. 生成证书rsaCert.crt，并设置有效时间为10年
openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-days</span> <span class="token number">36500</span> <span class="token parameter variable">-in</span> rsaCerReq-IOS.csr <span class="token parameter variable">-signkey</span> private_key.pem <span class="token parameter variable">-out</span> rsaCert-IOS.crt

<span class="token number">3</span>. 生成供iOS使用的公钥文件public_key.der
openssl x509 <span class="token parameter variable">-outform</span> der <span class="token parameter variable">-in</span> rsaCert-IOS.crt <span class="token parameter variable">-out</span> public_key-IOS.der

<span class="token number">4</span>. 生成供iOS使用的私钥文件private_key.p12
openssl pkcs12 <span class="token parameter variable">-export</span> <span class="token parameter variable">-out</span> private_key-IOS.p12 <span class="token parameter variable">-inkey</span> private_key.pem <span class="token parameter variable">-in</span> rsaCert-IOS.crt

密码：sirenbang
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629080086629.jpg" alt="openssl req -new -key private_key.pem -out rsaCerReq-IOS.csr" tabindex="0" loading="lazy"><figcaption>openssl req -new -key private_key.pem -out rsaCerReq-IOS.csr</figcaption></figure><ol start="3"><li>生成供Java使用的私钥pkcs8_private_key.pem</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl pkcs8 <span class="token parameter variable">-topk8</span> <span class="token parameter variable">-in</span> private_key.pem <span class="token parameter variable">-out</span> pkcs8_private_key.pem <span class="token parameter variable">-nocrypt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>生成通用公钥rsa_public_key.pem</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl rsa <span class="token parameter variable">-in</span> private_key.pem <span class="token parameter variable">-out</span> rsa_public_key.pem <span class="token parameter variable">-pubout</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>生成rsa公钥 供python等使用 py_public_key.pem</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>openssl rsa <span class="token parameter variable">-in</span> private_key.pem <span class="token parameter variable">-RSAPublicKey_out</span> <span class="token parameter variable">-out</span> py_public_key.pem 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><h3 id="java代码" tabindex="-1"><a class="header-anchor" href="#java代码" aria-hidden="true">#</a> JAVA代码</h3><p>工具类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>bouncycastle<span class="token punctuation">.</span>asn1<span class="token punctuation">.</span></span><span class="token class-name">ASN1Sequence</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>bouncycastle<span class="token punctuation">.</span>asn1<span class="token punctuation">.</span>pkcs<span class="token punctuation">.</span></span><span class="token class-name">RSAPrivateKeyStructure</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>bouncycastle<span class="token punctuation">.</span>jce<span class="token punctuation">.</span>provider<span class="token punctuation">.</span></span><span class="token class-name">BouncyCastleProvider</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span><span class="token class-name">BASE64Decoder</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>crypto<span class="token punctuation">.</span></span><span class="token class-name">Cipher</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">BufferedReader</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStream</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">InputStreamReader</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span></span><span class="token class-name">Key</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span></span><span class="token class-name">KeyFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span>interfaces<span class="token punctuation">.</span></span><span class="token class-name">RSAPrivateKey</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span>interfaces<span class="token punctuation">.</span></span><span class="token class-name">RSAPublicKey</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span>spec<span class="token punctuation">.</span></span><span class="token class-name">PKCS8EncodedKeySpec</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span>spec<span class="token punctuation">.</span></span><span class="token class-name">RSAPrivateKeySpec</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span>spec<span class="token punctuation">.</span></span><span class="token class-name">X509EncodedKeySpec</span></span><span class="token punctuation">;</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RSAEncryptUtils</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">RSAPublicKey</span> <span class="token function">loadPublicKey</span><span class="token punctuation">(</span><span class="token class-name">InputStream</span> in<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">loadPublicKey</span><span class="token punctuation">(</span><span class="token function">readKeyAsString</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">RSAPublicKey</span> <span class="token function">loadPublicKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> publicKeyStr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">BASE64Decoder</span> base64Decoder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BASE64Decoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> base64Decoder<span class="token punctuation">.</span><span class="token function">decodeBuffer</span><span class="token punctuation">(</span>publicKeyStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">KeyFactory</span> keyFactory <span class="token operator">=</span> <span class="token class-name">KeyFactory</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;RSA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">X509EncodedKeySpec</span> keySpec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">X509EncodedKeySpec</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">RSAPublicKey</span><span class="token punctuation">)</span> keyFactory<span class="token punctuation">.</span><span class="token function">generatePublic</span><span class="token punctuation">(</span>keySpec<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">RSAPrivateKey</span> <span class="token function">loadPrivateKey</span><span class="token punctuation">(</span><span class="token class-name">InputStream</span> in<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">loadPrivateKey</span><span class="token punctuation">(</span><span class="token function">readKeyAsString</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">RSAPrivateKey</span> <span class="token function">loadPrivateKey</span><span class="token punctuation">(</span><span class="token class-name">String</span> privateKeyStr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//pkcs8</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">BASE64Decoder</span> base64Decoder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BASE64Decoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> base64Decoder<span class="token punctuation">.</span><span class="token function">decodeBuffer</span><span class="token punctuation">(</span>privateKeyStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">PKCS8EncodedKeySpec</span> keySpec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PKCS8EncodedKeySpec</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">KeyFactory</span> keyFactory <span class="token operator">=</span> <span class="token class-name">KeyFactory</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;RSA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">RSAPrivateKey</span><span class="token punctuation">)</span> keyFactory<span class="token punctuation">.</span><span class="token function">generatePrivate</span><span class="token punctuation">(</span>keySpec<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//pkcs1</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">RSAPrivateKeyStructure</span> asn1PrivKey <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RSAPrivateKeyStructure</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">ASN1Sequence</span><span class="token punctuation">)</span> <span class="token class-name">ASN1Sequence</span><span class="token punctuation">.</span><span class="token function">fromByteArray</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BASE64Decoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decodeBuffer</span><span class="token punctuation">(</span>privateKeyStr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">RSAPrivateKeySpec</span> rsaPrivKeySpec <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RSAPrivateKeySpec</span><span class="token punctuation">(</span>asn1PrivKey<span class="token punctuation">.</span><span class="token function">getModulus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> asn1PrivKey<span class="token punctuation">.</span><span class="token function">getPrivateExponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">KeyFactory</span> keyFactory <span class="token operator">=</span> <span class="token class-name">KeyFactory</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;RSA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">RSAPrivateKey</span><span class="token punctuation">)</span> keyFactory<span class="token punctuation">.</span><span class="token function">generatePrivate</span><span class="token punctuation">(</span>rsaPrivKeySpec<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">encrypt</span><span class="token punctuation">(</span><span class="token class-name">Key</span> publicOrPrivateKey<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">endecrypt</span><span class="token punctuation">(</span>publicOrPrivateKey<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token class-name">Cipher</span><span class="token punctuation">.</span><span class="token constant">ENCRYPT_MODE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">decrypt</span><span class="token punctuation">(</span><span class="token class-name">Key</span> publicOrPrivateKey<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">endecrypt</span><span class="token punctuation">(</span>publicOrPrivateKey<span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token class-name">Cipher</span><span class="token punctuation">.</span><span class="token constant">DECRYPT_MODE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">endecrypt</span><span class="token punctuation">(</span><span class="token class-name">Key</span> publicOrPrivateKey<span class="token punctuation">,</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data<span class="token punctuation">,</span> <span class="token keyword">int</span> mode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>publicOrPrivateKey <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;加密或公钥不能为空&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Cipher</span> cipher <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            cipher <span class="token operator">=</span> <span class="token class-name">Cipher</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;RSA/ECB/PKCS1Padding&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BouncyCastleProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            cipher<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>mode<span class="token punctuation">,</span> publicOrPrivateKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> output <span class="token operator">=</span> cipher<span class="token punctuation">.</span><span class="token function">doFinal</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> output<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">readKeyAsString</span><span class="token punctuation">(</span><span class="token class-name">InputStream</span> in<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">BufferedReader</span> br <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> readLine <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>readLine <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>readLine<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">&#39;-&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                    sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>readLine<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token char">&#39;\\r&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试类：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span><span class="token class-name">BASE64Decoder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span><span class="token class-name">BASE64Encoder</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span>interfaces<span class="token punctuation">.</span></span><span class="token class-name">RSAPrivateKey</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>security<span class="token punctuation">.</span>interfaces<span class="token punctuation">.</span></span><span class="token class-name">RSAPublicKey</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RSAEncryptTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">RSAPublicKey</span> rsaPublicKey <span class="token operator">=</span> <span class="token class-name">RSAEncryptUtils</span><span class="token punctuation">.</span><span class="token function">loadPublicKey</span><span class="token punctuation">(</span><span class="token class-name">RSAEncryptUtils</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;/rsa_public_key.pem&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">RSAPrivateKey</span> rsaPrivateKey <span class="token operator">=</span> <span class="token class-name">RSAEncryptUtils</span><span class="token punctuation">.</span><span class="token function">loadPrivateKey</span><span class="token punctuation">(</span><span class="token class-name">RSAEncryptUtils</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getResourceAsStream</span><span class="token punctuation">(</span><span class="token string">&quot;/pkcs8_private_key.pem&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//测试字符串</span>
        <span class="token class-name">String</span> encryptStr <span class="token operator">=</span> <span class="token string">&quot;aabbcc123我的&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;原始字符串:&quot;</span> <span class="token operator">+</span> encryptStr <span class="token operator">+</span> <span class="token string">&quot;\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//加密</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cipher <span class="token operator">=</span> <span class="token class-name">RSAEncryptUtils</span><span class="token punctuation">.</span><span class="token function">encrypt</span><span class="token punctuation">(</span>rsaPublicKey<span class="token punctuation">,</span> encryptStr<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> encode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BASE64Encoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>cipher<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;公钥加密后:&quot;</span> <span class="token operator">+</span> encode<span class="token punctuation">)</span><span class="token punctuation">;</span>


            cipher <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BASE64Decoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decodeBuffer</span><span class="token punctuation">(</span>encode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//解密</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> plainText <span class="token operator">=</span> <span class="token class-name">RSAEncryptUtils</span><span class="token punctuation">.</span><span class="token function">decrypt</span><span class="token punctuation">(</span>rsaPrivateKey<span class="token punctuation">,</span> cipher<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;私钥解密后:&quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>plainText<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\\n\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//加密</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cipher <span class="token operator">=</span> <span class="token class-name">RSAEncryptUtils</span><span class="token punctuation">.</span><span class="token function">encrypt</span><span class="token punctuation">(</span>rsaPrivateKey<span class="token punctuation">,</span> encryptStr<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> encode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BASE64Encoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>cipher<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;私钥加密后:&quot;</span> <span class="token operator">+</span> encode<span class="token punctuation">)</span><span class="token punctuation">;</span>


            cipher <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BASE64Decoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">decodeBuffer</span><span class="token punctuation">(</span>encode<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//解密</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> plainText <span class="token operator">=</span> <span class="token class-name">RSAEncryptUtils</span><span class="token punctuation">.</span><span class="token function">decrypt</span><span class="token punctuation">(</span>rsaPublicKey<span class="token punctuation">,</span> cipher<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;公钥解密后:&quot;</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>plainText<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>java代码运行结果：</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629080101034.jpg" alt="java代码运行结果" tabindex="0" loading="lazy"><figcaption>java代码运行结果</figcaption></figure><h3 id="ios代码" tabindex="-1"><a class="header-anchor" href="#ios代码" aria-hidden="true">#</a> IOS代码</h3><p>RSAEncryptor.h ：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#import &lt;Foundation/Foundation.h&gt;

@interface RSAEncryptor : NSObject
/**
 *  加密方法
 *
 *  @param str   需要加密的字符串
 *  @param path  &#39;.der&#39;格式的公钥文件路径
 */
+ (NSString *)encryptString:(NSString *)str publicKeyWithContentsOfFile:(NSString *)path;

/**
 *  解密方法
 *
 *  @param str       需要解密的字符串
 *  @param path      &#39;.p12&#39;格式的私钥文件路径
 *  @param password  私钥文件密码
 */
+ (NSString *)decryptString:(NSString *)str privateKeyWithContentsOfFile:(NSString *)path password:(NSString *)password;

/**
 *  加密方法
 *
 *  @param str    需要加密的字符串
 *  @param pubKey 公钥字符串
 */
+ (NSString *)encryptString:(NSString *)str publicKey:(NSString *)pubKey;

/**
 *  解密方法
 *
 *  @param str     需要解密的字符串
 *  @param privKey 私钥字符串
 */
+ (NSString *)decryptString:(NSString *)str privateKey:(NSString *)privKey;
@end


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RSAEncryptor.m ：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
#import &quot;RSAEncryptor.h&quot;
#import &lt;Security/Security.h&gt;

static NSString *base64_encode_data(NSData *data){
    data = [data base64EncodedDataWithOptions:0];
    NSString *ret = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
    return ret;
}

static NSData *base64_decode(NSString *str){
    NSData *data = [[NSData alloc] initWithBase64EncodedString:str options:NSDataBase64DecodingIgnoreUnknownCharacters];
    return data;
}

@implementation RSAEncryptor

//加密
+ (NSString *)encryptString:(NSString *)str publicKeyWithContentsOfFile:(NSString *)path{
    if (!str || !path)  return nil;
    return [self encryptString:str publicKeyRef:[self getPublicKeyRefWithContentsOfFile:path]];
}

//获取公钥
+ (SecKeyRef)getPublicKeyRefWithContentsOfFile:(NSString *)filePath{
    NSData *certData = [NSData dataWithContentsOfFile:filePath];
    if (!certData) {
        return nil;
    }
    SecCertificateRef cert = SecCertificateCreateWithData(NULL, (CFDataRef)certData);
    SecKeyRef key = NULL;
    SecTrustRef trust = NULL;
    SecPolicyRef policy = NULL;
    if (cert != NULL) {
        policy = SecPolicyCreateBasicX509();
        if (policy) {
            if (SecTrustCreateWithCertificates((CFTypeRef)cert, policy, &amp;trust) == noErr) {
                SecTrustResultType result;
                if (SecTrustEvaluate(trust, &amp;result) == noErr) {
                    key = SecTrustCopyPublicKey(trust);
                }
            }
        }
    }
    if (policy) CFRelease(policy);
    if (trust) CFRelease(trust);
    if (cert) CFRelease(cert);
    return key;
}

+ (NSString *)encryptString:(NSString *)str publicKeyRef:(SecKeyRef)publicKeyRef{
    if(![str dataUsingEncoding:NSUTF8StringEncoding]){
        return nil;
    }
    if(!publicKeyRef){
        return nil;
    }
    NSData *data = [self encryptData:[str dataUsingEncoding:NSUTF8StringEncoding] withKeyRef:publicKeyRef];
    NSString *ret = base64_encode_data(data);
    return ret;
}

#pragma mark - 使用&#39;.12&#39;私钥文件解密

//解密
+ (NSString *)decryptString:(NSString *)str privateKeyWithContentsOfFile:(NSString *)path password:(NSString *)password{
    if (!str || !path) return nil;
    if (!password) password = @&quot;&quot;;
    return [self decryptString:str privateKeyRef:[self getPrivateKeyRefWithContentsOfFile:path password:password]];
}

//获取私钥
+ (SecKeyRef)getPrivateKeyRefWithContentsOfFile:(NSString *)filePath password:(NSString*)password{
    
    NSData *p12Data = [NSData dataWithContentsOfFile:filePath];
    if (!p12Data) {
        return nil;
    }
    SecKeyRef privateKeyRef = NULL;
    NSMutableDictionary * options = [[NSMutableDictionary alloc] init];
    [options setObject: password forKey:(__bridge id)kSecImportExportPassphrase];
    CFArrayRef items = CFArrayCreate(NULL, 0, 0, NULL);
    OSStatus securityError = SecPKCS12Import((__bridge CFDataRef) p12Data, (__bridge CFDictionaryRef)options, &amp;items);
    if (securityError == noErr &amp;&amp; CFArrayGetCount(items) &gt; 0) {
        CFDictionaryRef identityDict = CFArrayGetValueAtIndex(items, 0);
        SecIdentityRef identityApp = (SecIdentityRef)CFDictionaryGetValue(identityDict, kSecImportItemIdentity);
        securityError = SecIdentityCopyPrivateKey(identityApp, &amp;privateKeyRef);
        if (securityError != noErr) {
            privateKeyRef = NULL;
        }
    }
    CFRelease(items);
    
    return privateKeyRef;
}

+ (NSString *)decryptString:(NSString *)str privateKeyRef:(SecKeyRef)privKeyRef{
    NSData *data = [[NSData alloc] initWithBase64EncodedString:str options:NSDataBase64DecodingIgnoreUnknownCharacters];
    if (!privKeyRef) {
        return nil;
    }
    data = [self decryptData:data withKeyRef:privKeyRef];
    NSString *ret = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
    return ret;
}

#pragma mark - 使用公钥字符串加密

/* START: Encryption with RSA public key */

//使用公钥字符串加密
+ (NSString *)encryptString:(NSString *)str publicKey:(NSString *)pubKey{
    NSData *data = [self encryptData:[str dataUsingEncoding:NSUTF8StringEncoding] publicKey:pubKey];
    NSString *ret = base64_encode_data(data);
    return ret;
}

+ (NSData *)encryptData:(NSData *)data publicKey:(NSString *)pubKey{
    if(!data || !pubKey){
        return nil;
    }
    SecKeyRef keyRef = [self addPublicKey:pubKey];
    if(!keyRef){
        return nil;
    }
    return [self encryptData:data withKeyRef:keyRef];
}

+ (SecKeyRef)addPublicKey:(NSString *)key{
    NSRange spos = [key rangeOfString:@&quot;-----BEGIN PUBLIC KEY-----&quot;];
    NSRange epos = [key rangeOfString:@&quot;-----END PUBLIC KEY-----&quot;];
    if(spos.location != NSNotFound &amp;&amp; epos.location != NSNotFound){
        NSUInteger s = spos.location + spos.length;
        NSUInteger e = epos.location;
        NSRange range = NSMakeRange(s, e-s);
        key = [key substringWithRange:range];
    }
    key = [key stringByReplacingOccurrencesOfString:@&quot;\\r&quot; withString:@&quot;&quot;];
    key = [key stringByReplacingOccurrencesOfString:@&quot;\\n&quot; withString:@&quot;&quot;];
    key = [key stringByReplacingOccurrencesOfString:@&quot;\\t&quot; withString:@&quot;&quot;];
    key = [key stringByReplacingOccurrencesOfString:@&quot; &quot;  withString:@&quot;&quot;];
    
    // This will be base64 encoded, decode it.
    NSData *data = base64_decode(key);
    data = [self stripPublicKeyHeader:data];
    if(!data){
        return nil;
    }
    
    //a tag to read/write keychain storage
    NSString *tag = @&quot;RSAUtil_PubKey&quot;;
    NSData *d_tag = [NSData dataWithBytes:[tag UTF8String] length:[tag length]];
    
    // Delete any old lingering key with the same tag
    NSMutableDictionary *publicKey = [[NSMutableDictionary alloc] init];
    [publicKey setObject:(__bridge id) kSecClassKey forKey:(__bridge id)kSecClass];
    [publicKey setObject:(__bridge id) kSecAttrKeyTypeRSA forKey:(__bridge id)kSecAttrKeyType];
    [publicKey setObject:d_tag forKey:(__bridge id)kSecAttrApplicationTag];
    SecItemDelete((__bridge CFDictionaryRef)publicKey);
    
    // Add persistent version of the key to system keychain
    [publicKey setObject:data forKey:(__bridge id)kSecValueData];
    [publicKey setObject:(__bridge id) kSecAttrKeyClassPublic forKey:(__bridge id)
     kSecAttrKeyClass];
    [publicKey setObject:[NSNumber numberWithBool:YES] forKey:(__bridge id)
     kSecReturnPersistentRef];
    
    CFTypeRef persistKey = nil;
    OSStatus status = SecItemAdd((__bridge CFDictionaryRef)publicKey, &amp;persistKey);
    if (persistKey != nil){
        CFRelease(persistKey);
    }
    if ((status != noErr) &amp;&amp; (status != errSecDuplicateItem)) {
        return nil;
    }
    
    [publicKey removeObjectForKey:(__bridge id)kSecValueData];
    [publicKey removeObjectForKey:(__bridge id)kSecReturnPersistentRef];
    [publicKey setObject:[NSNumber numberWithBool:YES] forKey:(__bridge id)kSecReturnRef];
    [publicKey setObject:(__bridge id) kSecAttrKeyTypeRSA forKey:(__bridge id)kSecAttrKeyType];
    
    // Now fetch the SecKeyRef version of the key
    SecKeyRef keyRef = nil;
    status = SecItemCopyMatching((__bridge CFDictionaryRef)publicKey, (CFTypeRef *)&amp;keyRef);
    if(status != noErr){
        return nil;
    }
    return keyRef;
}

+ (NSData *)stripPublicKeyHeader:(NSData *)d_key{
    // Skip ASN.1 public key header
    if (d_key == nil) return(nil);
    
    unsigned long len = [d_key length];
    if (!len) return(nil);
    
    unsigned char *c_key = (unsigned char *)[d_key bytes];
    unsigned int  idx     = 0;
    
    if (c_key[idx++] != 0x30) return(nil);
    
    if (c_key[idx] &gt; 0x80) idx += c_key[idx] - 0x80 + 1;
    else idx++;
    
    // PKCS #1 rsaEncryption szOID_RSA_RSA
    static unsigned char seqiod[] =
    { 0x30,   0x0d, 0x06, 0x09, 0x2a, 0x86, 0x48, 0x86, 0xf7, 0x0d, 0x01, 0x01,
        0x01, 0x05, 0x00 };
    if (memcmp(&amp;c_key[idx], seqiod, 15)) return(nil);
    
    idx += 15;
    
    if (c_key[idx++] != 0x03) return(nil);
    
    if (c_key[idx] &gt; 0x80) idx += c_key[idx] - 0x80 + 1;
    else idx++;
    
    if (c_key[idx++] != &#39;\\0&#39;) return(nil);
    
    // Now make a new NSData from this buffer
    return ([NSData dataWithBytes:&amp;c_key[idx] length:len - idx]);
}

+ (NSData *)encryptData:(NSData *)data withKeyRef:(SecKeyRef) keyRef{
    const uint8_t *srcbuf = (const uint8_t *)[data bytes];
    size_t srclen = (size_t)data.length;
    
    size_t block_size = SecKeyGetBlockSize(keyRef) * sizeof(uint8_t);
    void *outbuf = malloc(block_size);
    size_t src_block_size = block_size - 11;
    
    NSMutableData *ret = [[NSMutableData alloc] init];
    for(int idx=0; idx&lt;srclen; idx+=src_block_size){
        //NSLog(@&quot;%d/%d block_size: %d&quot;, idx, (int)srclen, (int)block_size);
        size_t data_len = srclen - idx;
        if(data_len &gt; src_block_size){
            data_len = src_block_size;
        }
        
        size_t outlen = block_size;
        OSStatus status = noErr;
        status = SecKeyEncrypt(keyRef,
                               kSecPaddingPKCS1,
                               srcbuf + idx,
                               data_len,
                               outbuf,
                               &amp;outlen
                               );
        if (status != 0) {
            NSLog(@&quot;SecKeyEncrypt fail. Error Code: %d&quot;, status);
            ret = nil;
            break;
        }else{
            [ret appendBytes:outbuf length:outlen];
        }
    }
    
    free(outbuf);
    CFRelease(keyRef);
    return ret;
}

/* END: Encryption with RSA public key */

#pragma mark - 使用私钥字符串解密

/* START: Decryption with RSA private key */

//使用私钥字符串解密
+ (NSString *)decryptString:(NSString *)str privateKey:(NSString *)privKey{
    if (!str) return nil;
    NSData *data = [[NSData alloc] initWithBase64EncodedString:str options:NSDataBase64DecodingIgnoreUnknownCharacters];
    data = [self decryptData:data privateKey:privKey];
    NSString *ret = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
    return ret;
}

+ (NSData *)decryptData:(NSData *)data privateKey:(NSString *)privKey{
    if(!data || !privKey){
        return nil;
    }
    SecKeyRef keyRef = [self addPrivateKey:privKey];
    if(!keyRef){
        return nil;
    }
    return [self decryptData:data withKeyRef:keyRef];
}

+ (SecKeyRef)addPrivateKey:(NSString *)key{
    NSRange spos = [key rangeOfString:@&quot;-----BEGIN RSA PRIVATE KEY-----&quot;];
    NSRange epos = [key rangeOfString:@&quot;-----END RSA PRIVATE KEY-----&quot;];
    if(spos.location != NSNotFound &amp;&amp; epos.location != NSNotFound){
        NSUInteger s = spos.location + spos.length;
        NSUInteger e = epos.location;
        NSRange range = NSMakeRange(s, e-s);
        key = [key substringWithRange:range];
    }
    key = [key stringByReplacingOccurrencesOfString:@&quot;\\r&quot; withString:@&quot;&quot;];
    key = [key stringByReplacingOccurrencesOfString:@&quot;\\n&quot; withString:@&quot;&quot;];
    key = [key stringByReplacingOccurrencesOfString:@&quot;\\t&quot; withString:@&quot;&quot;];
    key = [key stringByReplacingOccurrencesOfString:@&quot; &quot;  withString:@&quot;&quot;];
    
    // This will be base64 encoded, decode it.
    NSData *data = base64_decode(key);
    data = [self stripPrivateKeyHeader:data];
    if(!data){
        return nil;
    }
    
    //a tag to read/write keychain storage
    NSString *tag = @&quot;RSAUtil_PrivKey&quot;;
    NSData *d_tag = [NSData dataWithBytes:[tag UTF8String] length:[tag length]];
    
    // Delete any old lingering key with the same tag
    NSMutableDictionary *privateKey = [[NSMutableDictionary alloc] init];
    [privateKey setObject:(__bridge id) kSecClassKey forKey:(__bridge id)kSecClass];
    [privateKey setObject:(__bridge id) kSecAttrKeyTypeRSA forKey:(__bridge id)kSecAttrKeyType];
    [privateKey setObject:d_tag forKey:(__bridge id)kSecAttrApplicationTag];
    SecItemDelete((__bridge CFDictionaryRef)privateKey);
    
    // Add persistent version of the key to system keychain
    [privateKey setObject:data forKey:(__bridge id)kSecValueData];
    [privateKey setObject:(__bridge id) kSecAttrKeyClassPrivate forKey:(__bridge id)
     kSecAttrKeyClass];
    [privateKey setObject:[NSNumber numberWithBool:YES] forKey:(__bridge id)
     kSecReturnPersistentRef];
    
    CFTypeRef persistKey = nil;
    OSStatus status = SecItemAdd((__bridge CFDictionaryRef)privateKey, &amp;persistKey);
    if (persistKey != nil){
        CFRelease(persistKey);
    }
    if ((status != noErr) &amp;&amp; (status != errSecDuplicateItem)) {
        return nil;
    }
    
    [privateKey removeObjectForKey:(__bridge id)kSecValueData];
    [privateKey removeObjectForKey:(__bridge id)kSecReturnPersistentRef];
    [privateKey setObject:[NSNumber numberWithBool:YES] forKey:(__bridge id)kSecReturnRef];
    [privateKey setObject:(__bridge id) kSecAttrKeyTypeRSA forKey:(__bridge id)kSecAttrKeyType];
    
    // Now fetch the SecKeyRef version of the key
    SecKeyRef keyRef = nil;
    status = SecItemCopyMatching((__bridge CFDictionaryRef)privateKey, (CFTypeRef *)&amp;keyRef);
    if(status != noErr){
        return nil;
    }
    return keyRef;
}

+ (NSData *)stripPrivateKeyHeader:(NSData *)d_key{
    // Skip ASN.1 private key header
    if (d_key == nil) return(nil);
    
    unsigned long len = [d_key length];
    if (!len) return(nil);
    
    unsigned char *c_key = (unsigned char *)[d_key bytes];
    unsigned int  idx     = 22; //magic byte at offset 22
    
    if (0x04 != c_key[idx++]) return nil;
    
    //calculate length of the key
    unsigned int c_len = c_key[idx++];
    int det = c_len &amp; 0x80;
    if (!det) {
        c_len = c_len &amp; 0x7f;
    } else {
        int byteCount = c_len &amp; 0x7f;
        if (byteCount + idx &gt; len) {
            //rsa length field longer than buffer
            return nil;
        }
        unsigned int accum = 0;
        unsigned char *ptr = &amp;c_key[idx];
        idx += byteCount;
        while (byteCount) {
            accum = (accum &lt;&lt; 8) + *ptr;
            ptr++;
            byteCount--;
        }
        c_len = accum;
    }
    
    // Now make a new NSData from this buffer
    return [d_key subdataWithRange:NSMakeRange(idx, c_len)];
}

+ (NSData *)decryptData:(NSData *)data withKeyRef:(SecKeyRef) keyRef{
    const uint8_t *srcbuf = (const uint8_t *)[data bytes];
    size_t srclen = (size_t)data.length;
    
    size_t block_size = SecKeyGetBlockSize(keyRef) * sizeof(uint8_t);
    UInt8 *outbuf = malloc(block_size);
    size_t src_block_size = block_size;
    
    NSMutableData *ret = [[NSMutableData alloc] init];
    for(int idx=0; idx&lt;srclen; idx+=src_block_size){
        //NSLog(@&quot;%d/%d block_size: %d&quot;, idx, (int)srclen, (int)block_size);
        size_t data_len = srclen - idx;
        if(data_len &gt; src_block_size){
            data_len = src_block_size;
        }
        
        size_t outlen = block_size;
        OSStatus status = noErr;
        status = SecKeyDecrypt(keyRef,
                               kSecPaddingNone,
                               srcbuf + idx,
                               data_len,
                               outbuf,
                               &amp;outlen
                               );
        if (status != 0) {
            NSLog(@&quot;SecKeyEncrypt fail. Error Code: %d&quot;, status);
            ret = nil;
            break;
        }else{
            //the actual decrypted data is in the middle, locate it!
            int idxFirstZero = -1;
            int idxNextZero = (int)outlen;
            for ( int i = 0; i &lt; outlen; i++ ) {
                if ( outbuf[i] == 0 ) {
                    if ( idxFirstZero &lt; 0 ) {
                        idxFirstZero = i;
                    } else {
                        idxNextZero = i;
                        break;
                    }
                }
            }
            
            [ret appendBytes:&amp;outbuf[idxFirstZero+1] length:idxNextZero-idxFirstZero-1];
        }
    }
    
    free(outbuf);
    CFRelease(keyRef);
    return ret;
}

/* END: Decryption with RSA private key */


@end

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试代码（ViewController.m）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
#import &quot;ViewController.h&quot;
#import &quot;RSAEncryptor.h&quot;

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    //原始字符串
    NSString *originalString = @&quot;aabbcc123我的&quot;;
    NSString *public_key_path = [[NSBundle mainBundle] pathForResource:@&quot;public_key-IOS.der&quot; ofType:nil];
    NSString *private_key_path = [[NSBundle mainBundle] pathForResource:@&quot;private_key-IOS.p12&quot; ofType:nil];
    
    NSLog(@&quot;原始字符串:%@\\n&quot;, originalString);
    
    //使用公钥加密
    NSString *encryptStr = [RSAEncryptor encryptString:originalString publicKeyWithContentsOfFile:public_key_path];
    NSLog(@&quot;使用公钥加密后:%@\\n&quot;, encryptStr);
    
    //使用私钥解密
    NSLog(@&quot;使用私钥解密后:%@\\n\\n&quot;, [RSAEncryptor decryptString:encryptStr privateKeyWithContentsOfFile:private_key_path password:@&quot;sirenbang&quot;]);
    
    //通过java代码使用公钥加密后的字符串
    NSString * encryptedStrByJavaWithPublicKey = @&quot;aDuXxkcEK4RZqt47GRM33Op77pFZMgb7VmVrlcWPO5jQMAIkE+7RS2zXNPX4uSwXafAFYG4y99vOwrgl8J5IMDo/7uvQtilb66z2oCUfXfWyXAt2gkJue4nJkcjiTKvNGUj4t3672pbo3DyGwGvY/2F1Ydc76Wwo96DN/rlkt5E=&quot;;
    
    //解密java语言使用公钥加密后的字符串
    NSLog(@&quot;java语言使用公钥加密后:%@\\n&quot;, encryptedStrByJavaWithPublicKey);
    NSLog(@&quot;解密后的字符串:%@&quot;, [RSAEncryptor decryptString:encryptedStrByJavaWithPublicKey privateKeyWithContentsOfFile:private_key_path password:@&quot;sirenbang&quot;]);
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>IOS代码运行结果：</p><figure><img src="https://cdn.justdopay.com/xiaoshujiang/1629080095471.jpg" alt="IOS代码运行结果" tabindex="0" loading="lazy"><figcaption>IOS代码运行结果</figcaption></figure><h3 id="python代码" tabindex="-1"><a class="header-anchor" href="#python代码" aria-hidden="true">#</a> Python代码</h3><p>python代码没有验证过，但应该没啥问题</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> rsa
<span class="token keyword">import</span> base64

<span class="token comment"># 导入key</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;py_public_key.pem&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> publickfile<span class="token punctuation">:</span>
    p <span class="token operator">=</span> publickfile<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    pubkey <span class="token operator">=</span> rsa<span class="token punctuation">.</span>PublicKey<span class="token punctuation">.</span>load_pkcs1<span class="token punctuation">(</span>p<span class="token punctuation">)</span>

<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;private_key.pem&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> privatefile<span class="token punctuation">:</span>
    p <span class="token operator">=</span> privatefile<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
    privkey <span class="token operator">=</span> rsa<span class="token punctuation">.</span>PrivateKey<span class="token punctuation">.</span>load_pkcs1<span class="token punctuation">(</span>p<span class="token punctuation">)</span>

bob_pub <span class="token operator">=</span> pubkey
bob_priv <span class="token operator">=</span> privkey

message <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;{&quot;id&quot;: &quot;49187f817657ecd9d472562b16c0ec7c&quot;,&quot;ip&quot;: &quot;180.168.161.194&quot;,&quot;user-agent&quot;: &quot;iOS8.1 iPhone 5s&quot;,&quot;ts&quot;: &quot;1478879016008&quot;,&quot;channel&quot;: &quot;iOS&quot;}&quot;&quot;&quot;</span>

<span class="token comment"># 数据分割函数</span>
<span class="token keyword">def</span> <span class="token function">format_str</span><span class="token punctuation">(</span>string<span class="token punctuation">,</span> width<span class="token punctuation">)</span><span class="token punctuation">:</span>
    format_list <span class="token operator">=</span> <span class="token punctuation">[</span>string<span class="token punctuation">[</span>x<span class="token punctuation">:</span>x<span class="token operator">+</span>width<span class="token punctuation">]</span> <span class="token keyword">for</span> x <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">,</span>width<span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> format_list
<span class="token comment"># 按大小分割数据</span>
str_list <span class="token operator">=</span> format_str<span class="token punctuation">(</span>message<span class="token punctuation">,</span><span class="token number">117</span><span class="token punctuation">)</span>

<span class="token comment"># 加密</span>
data_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> _str <span class="token keyword">in</span> str_list<span class="token punctuation">:</span>
    data_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>base64<span class="token punctuation">.</span>encodestring<span class="token punctuation">(</span>rsa<span class="token punctuation">.</span>encrypt<span class="token punctuation">(</span>_str<span class="token punctuation">,</span> bob_pub<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 解密</span>
_data_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> data <span class="token keyword">in</span> data_list<span class="token punctuation">.</span>append<span class="token punctuation">:</span>
    _data_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>rsa<span class="token punctuation">.</span>decrypt<span class="token punctuation">(</span>base64<span class="token punctuation">.</span>decodestring<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">,</span> bob_priv<span class="token punctuation">)</span><span class="token punctuation">)</span>

_message <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>_data_list<span class="token punctuation">.</span>append<span class="token punctuation">)</span>
<span class="token keyword">print</span> _message

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br><h2 id="系统推荐" tabindex="-1"><a class="header-anchor" href="#系统推荐" aria-hidden="true">#</a> 系统推荐</h2>`,34),d=n("p",null,[n("br"),n("br"),n("br"),n("br"),n("br"),n("br")],-1),v=n("hr",null,null,-1),k=n("hr",null,null,-1),m=n("ul",null,[n("li",null,[n("strong",null,"随机毒鸡汤"),s("：所有的为你好，都只是为了他们心情好。 "),n("br"),n("br"),n("img",{src:"https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=6577d55c-57bd-4451-8c1f-12eae2e42c1a",alt:"",loading:"lazy"})])],-1);function b(y,S){const a=o("RouterLink");return p(),l("div",null,[r,n("ul",null,[n("li",null,[e(a,{to:"/other/Git%E5%90%88%E5%B9%B6%E5%A4%9A%E4%B8%AA%E6%8F%90%E4%BA%A4%E5%B9%B6push%E5%88%B0%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html"},{default:i(()=>[s("Git合并多个提交并push到远程仓库")]),_:1})]),n("li",null,[e(a,{to:"/software/unclassified/%E6%B5%8B%E8%AF%95%E4%B8%A4%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%97%B4%E7%9A%84%E7%BD%91%E9%80%9F.html"},{default:i(()=>[s("测试两台服务器间的网速")]),_:1})]),n("li",null,[e(a,{to:"/software/middleware/mq/kafka.html"},{default:i(()=>[s("kafka")]),_:1})]),n("li",null,[e(a,{to:"/other/istio%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"},{default:i(()=>[s("istio基础知识")]),_:1})]),n("li",null,[e(a,{to:"/software/unclassified/%E5%A4%9A%E5%8F%B0centos%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%8C%E6%96%87%E4%BB%B6%E4%BA%92%E7%9B%B8%E5%A4%87%E4%BB%BD.html"},{default:i(()=>[s("多台centos服务器，文件互相备份")]),_:1})]),n("li",null,[e(a,{to:"/other/%E8%A1%8C%E8%BD%AC%E5%88%97%E4%B8%8D%E5%86%8D%E5%A4%8D%E6%9D%82%EF%BC%9ASQL%E9%AB%98%E6%89%8B%E9%83%BD%E5%9C%A8%E7%94%A8%E7%9A%84%E6%8A%80%E5%B7%A7%E6%8F%AD%E7%A7%98.html"},{default:i(()=>[s("行转列不再复杂：SQL高手都在用的技巧揭秘")]),_:1})]),n("li",null,[e(a,{to:"/software/middleware/mysql/%E5%BC%82%E5%9C%B0%E5%A4%9A%E6%B4%BB.html"},{default:i(()=>[s("异地多活")]),_:1})]),n("li",null,[e(a,{to:"/software/unclassified/%E7%AE%80%E6%98%93%E7%89%88%E9%85%8D%E7%BD%AE%E4%B8%AD%E5%BF%83&%E5%88%9D%E6%8E%A2%E5%8E%9F%E7%90%86.html"},{default:i(()=>[s("简易版配置中心&初探原理")]),_:1})]),n("li",null,[e(a,{to:"/software/middleware/mysql/%E5%88%86%E5%B8%83%E5%BC%8F%E4%BA%8B%E5%8A%A1Seata.html"},{default:i(()=>[s("分布式事务Seata")]),_:1})]),n("li",null,[e(a,{to:"/other/Git%E5%8E%86%E5%8F%B2%E8%AE%B0%E5%BD%95%E4%BF%AE%E6%94%B9%E7%94%A8%E6%88%B7%E5%90%8D%E5%92%8C%E9%82%AE%E7%AE%B1.html"},{default:i(()=>[s("Git历史记录修改用户名和邮箱")]),_:1})]),n("li",null,[e(a,{to:"/other/vuepress-theme-hope%20%E6%B7%BB%E5%8A%A0%E8%B0%B7%E6%AD%8C%E5%B9%BF%E5%91%8A.html"},{default:i(()=>[s("vuepress-theme-hope 添加谷歌广告")]),_:1})]),n("li",null,[e(a,{to:"/other/SpringBoot%E6%9C%8D%E5%8A%A1%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%90%AF%E5%8A%A8%E5%AE%8C%E6%88%90%E5%89%8D%E8%A2%AB%E6%8F%90%E5%89%8D%E6%B3%A8%E5%86%8C%E5%88%B0nacos.html"},{default:i(()=>[s("SpringBoot服务在服务启动完成前被提前注册到nacos")]),_:1})])]),d,v,k,m])}const f=t(u,[["render",b],["__file","RSA 加密解密多语言实现方案.html.vue"]]);export{f as default};
