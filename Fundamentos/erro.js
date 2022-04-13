function error(erro) {
  throw new Error('VISH!!!')
}

function printNameCrazy(obj) {

  try {
    
    console.log(obj.name.toUpperCase() + '!!!');

  } catch (e) {

    error(e)

  } finally {

    console.log('final');

  }
};

// const obj = { name: 'Roberto' } // correto
const obj = { nome: 'Roberto' }

printNameCrazy(obj)