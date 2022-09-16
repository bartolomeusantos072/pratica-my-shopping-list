describe('Testa POST /items ', () => {
  it.todo('Deve retornar 201, se cadastrado um item no formato correto');
  it.todo('Deve retornar 409, ao tentar cadastrar um item que exista');
});

describe('Testa GET /items ', () => {
  it.todo('Deve retornar status 200 e o body no formato de Array');
});

describe('Testa GET /items/:id ', () => {
  it.todo('Deve retornar status 200 e um objeto igual a o item cadastrado');
  it.todo('Deve retornar status 404 caso não exista um item com esse id');
});
