---
title: K8S常用命令
date: 2023-12-26
tag:
- k8s
category:
- k8s
---

## 常用命令

### 查看所有命令空间

```json
kubectl get ns
```

### 查看当前命名空间

```json
kubectl config view --minify --output 'jsonpath={..namespace}'
```

### 查看命名空间详情

```json
kubectl describe ns xxxx
```

### 查看所有ingress

```json
kubectl get ing
kubectl get ingress
kubectl get ing -o wide --show-labels
```

### 查看ingress详情

```json
kubectl describe ing xxx
```

### 查看所有的service

```json
kubectl get svc
kubectl get service
kubectl get svc -o wide --show-labels
```

### 查看service详情

```json
kubectl describe svc xxx
```

### 查看所有pod

```json
kubectl get po
kubectl get pod
kubectl get pods
kubectl get po -o wide --show-labels
```

### 查看pod详情

```json
kubectl describe pod xxx
```

### 进入pod内部

```json
kubectl exec -it xxx bash
kubectl exec -it xxx sh
```

### 查看pod最后n行日志

```json
kubectl logs -f xxxx-podname --tail=100

//100就是从最后100行开始输出
```

### 导出yaml文件

```json
kubectl get deployment my-deployment -o yaml
kubectl get svc xxx -o yaml
```

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：第一个称马尾辫为马尾的人，有没有想过，马尾长在马的哪里？
<br/><br/>
![](https://api.btstu.cn/sjbz/?lx=suiji&uuid=0889578d-7b1c-487e-a511-ecc6f69f30f2)
