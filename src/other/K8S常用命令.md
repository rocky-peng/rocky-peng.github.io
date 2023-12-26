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

<br/><br/><br/><br/><br/><br/>

---
---
- **随机毒鸡汤**：自从傻B这个词出现后，傻瓜笨蛋这些词，就被划分到了情话行列。
<br/><br/>
![](https://tuapi.eees.cc/api.php?category=biying&type=302&uuid=8fac4936-cfeb-4ae3-a304-e20d01753ac9)
