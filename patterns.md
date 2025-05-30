# Conceitos

- Aggregate
  - Um Aggregate é um cluster de entidades e objetos de valor que são tratados como uma única unidade. Ele possui uma raiz (Aggregate Root), que é a única entidade acessível externamente e é responsável por garantir a consistência do agregado.
- WatchedList
  - Permite a gente ter mais informações sobre items contidos numa lista.

# Exemplo

- Order -> OrderItem[]
- Order -> Shipping

- Question -> Attachment[]

### Criação

- Título
- Conteúdo
- Anexos

### Edição

- Título
- Conteúdo

- Adicionar um novo anexo (create)
- Remover o segundo anexo que tinha sido criado previamente (delete)
- Editar uma anexo existente (update)
