# Documentação da Cars-API

 API para gerenciar uma lista de carros
## Tabela de Conteúdos
* Visão Geral
* Arquitetura
* Endpoints

# 1. Visão Geral
Visão geral do projeto, um pouco das tecnologias usadas.
* NodeJS
* Express
* TypeScript
* Zod

# 2. Arquitetura
  - Controller + Services, Interfaces, Routes, middlewares + errors, database(fake);

# 3. Endpoints
##Indice
* Cars
  * Post - /cars (Criação de um carro)
  * Get = /cars (Leitura de todos os carros)
  * Get - /cars/:id (Criação de um carro especifico)
  * Delete - /cars/:id (Apagar um carro)
  * Patch - /cars/:id (Editar um carro)

# 1. Cars
O objeto Cars é definido como:
```json
  {
    "id": number,
    "model": string,
    "km": number,
    "year": date,
    "brand": string,
    "price": number,
    "createdAt": date,
    "updatedAt": date
  }
```

## Rotas
### 1.1 Criação de carros POST /cars
Padrão de corpo
```json
  {
     "model": "Uno",
     "km": 80000,
     "year": 2017,
     "brand": "Fiat",
     "price": 40000
  }

```
### Price é um campo opcional

Padrão de resposta:
```json
  {
     "id": 1,
     "model": "Uno",
     "km": 80000,
     "year": 2017,
     "brand": "Fiat",
     "price": 40000,
     "createdAt": "2023-10-06T13:14:21.752Z",
     "updatedAt": "2023-10-06T13:14:21.752Z"
  }
```

### 1.2 Leitura de carros GET /cars
Padrão de resposta:
```json
[
   {
      "id": 1,
      "model": "Uno",
      "km": 80000,
      "year": 2017,
      "brand": "Fiat",
      "price": 40000,
      "createdAt": "2023-10-06T13:14:21.752Z",
      "updatedAt": "2023-10-06T13:14:21.752Z"
   }
]
```
### Possível parâmetros de busca (searchParams)

|Parâmetro|Descrição|
|---------|---------|
|search|Busca carro pelo modelo|
|year|Busca carro pelo ano|

### Leitura de carro individual GET /cars/:id
Padrão de Resposta:
```json
{
   "id": 1,
   "model": "Uno",
   "km": 80000,
   "year": 2017,
   "brand": "Fiat",
   "price": 40000,
   "createdAt": "2023-10-06T13:14:21.752Z",
   "updatedAt": "2023-10-06T13:14:21.752Z"
}
```
Possiveis erros:
### Carro não encontrado 404
```json
{
   "error": "Car not found"
}
```

### 1.3 Exclusão de carros DELETE /cars/:id
Está rota não precisa de corpo e não tem um objeto de resposta.
Possíveis erros:
### Carro não encontrado 404
```json
{
   "error": "Car not found"
}
```

### 1.4 Atualização de carros PATCH /cars/:id
Padrão de corpo:
```json
{
   "model": "Uno",
   "km": 120000,
   "year": 2017,
   "brand": "Fiat",
   "price": 32000
}
```
* Todos os campos desta rota são opcionais

Padrão de resposta:
```json
{
   "id": 1,
   "model": "Uno",
   "km": 120000,
   "year": 2017,
   "brand": "Fiat",
   "price": 32000,
   "createdAt": "2023-10-06T13:14:21.752Z",
   "updatedAt": "2023-10-07T13:14:21.752Z"
}
```
Possíveis erros:
### Carro não encontrado 404
```json
{
   "error": "Car not found"
}
```




