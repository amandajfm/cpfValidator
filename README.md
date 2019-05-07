# Validador de número de CPF v.1.0.0

**Esta biblioteca se destina à validação de números de CPF.**
A versão atual é capaz de validar números de CPF (Cadastro de pessoa física).

## Como instalar:

```shell

$  npm install cpfvalidator-am

```

## Como utilizar:

```node

> const validator = require("cpfvalidator-am");
> validator.cpfValidator("469.982.920-15")
> // returns "true"

```

## Roadmap oficial do projeto

#### versão 1.0.0 (released)
- Funcionalidades: Validação de sequência numérica de cpf, incluindo ou não espaços e caracteres especiais como ponto e traço.