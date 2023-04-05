const { query } = require('express');
const Firebird = require('node-firebird');
const fs = require('fs');


const options = {
  host: /*ip de sua conexao FireBird =>*/'',
  port: /*sua porta aqui =>*/8888,
  database: /*nome ou diretorio da sua db =>*/'',
  user: /*usuario =>*/'',
  password: /*senha =>*/'',
  lowercase_keys: false,
  role: null,
  pageSize: 5000
};
/*validando a conexao com o banco FireBird*/
Firebird.attach(options, function(err, db)/*CallBack*/{
    if (err)
      throw err;
    console.log('Sucessso');
    db.detach

    const query = ` Sua consulta aqui
          SELECT* FROM DATE
    `;

db.query(query, function(err, result) {
  if (err){
    console.log(`callBack`);
  }else{ /*Salvando a consulta em formato txt*/
    const data = result.map((row)=>Object.values(row).join('\t')).join(`\n`);
    require(`fs`).writeFileSync(`retorno.txt`, data);
    db.
    db
  }
  db.detach();
    });
});
/*Lendo os arquivos e exibindo no console ou cmd*/
fs.readFile('retorno.txt','utf8', function(err,data){
  if(err) throw err;
	console.log(data);
});