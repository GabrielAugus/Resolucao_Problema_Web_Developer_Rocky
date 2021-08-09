
var broken_Database = [{
  "id": 5677240,
  "name": "Cønjuntø de Pænelæs æntiæderentes ¢øm 05 Peçæs Pæris",
  "quantity": 21,
  "price": "192.84",
  "category": "Panelas"
},
{
  "id": 9628920,
  "name": "Lævæ & Se¢æ 10,2 Kg Sæmsung E¢ø ßußßle ßræn¢æ ¢øm 09 Prøgræmæs de Lævægem",
  "quantity": 57,
  "price": 3719.70,
  "category": "Eletrodomésticos"
},
{
  "id": 1316334,
  "name": "Refrigerædør ßøttøm Freezer Ele¢trølux de 02 Pørtæs Frøst Free ¢øm 598 Litrøs",
  "quantity": 12,
  "price": 3880.23,
  "category": "Eletrodomésticos"
},
{
  "id": 6502394,
  "name": "Føgãø de Pisø Ele¢trølux de 04 ßø¢æs, Mesæ de Vidrø Prætæ",
  "quantity": 37,
  "price": "1419",
  "category": "Eletrodomésticos"
},
{
  "id": 9576720,
  "name": "Førnø Mi¢rø-øndæs Pænæsøni¢ ¢øm ¢æpæ¢idæde de 21 Litrøs ßræn¢ø",
  "quantity": 13,
  "price": "358.77",
  "category": "Eletrodomésticos"
},
{
  "id": 8875900,
  "name": "Smært TV 4K Søny LED 65” 4K X-Reælity Prø, UpS¢ælling, Møtiønfløw XR 240 e Wi-F",
  "quantity": 0,
  "price": 5799.42,
  "category": "Eletrônicos"
},
{
  "id": 9746439,
  "name": "Høme Theæter LG ¢øm ßlu-ræy 3D, 5.1 ¢ænæis e 1000W",
  "quantity": 80,
  "price": 2199,
  "category": "Eletrônicos"
},
{
  "id": 2162952,
  "name": "Kit Gæmer æ¢er - Nøteßøøk + Heædset + Møuse",
  "price": "25599.00",
  "category": "Eletrônicos"
},
{
  "id": 3500957,
  "name": "Mønitør 29 LG FHD Ultræwide ¢øm 1000:1 de ¢øntræste",
  "quantity": 18,
  "price": 1559.40,
  "category": "Eletrônicos"
},
{
  "id": 1911864,
  "name": "Møuse Gæmer Predætør ¢estus 510 Føx Pretø",
  "price": "699",
  "category": "Acessórios"
}
]

function lerBancoDados(){
 
  // "For" irá ler todos os elementos dentro do da estrutura broken_DataBase que vem do JSON.

  for (var i = 0; i < broken_Database.length; i++){

    /* Function 'lerNomes()' será responsável por localizar os caracteres que estão errados e reverter a seus respectivos caracteres corretos  */

    function lerNomes(){
      let receberDataBaseNames = broken_Database[i].name
      let caracteresCorretos = receberDataBaseNames
              .replace(/ø/gi, "o")
              .replace(/æ/gi, "a")
              .replace(/¢/gi, "c")
              .replace(/ß/gi, "b")

      
      broken_Database[i].name = caracteresCorretos
    } 
    
    
    // A função lerQuantidades() é responsável por verificar qual elemento do objeto broken_dataBase está sem a propriedade "quantity" e inclui-lás com valor 0
    function lerQuantidades(){

      let receberDataBaseQuantidade = broken_Database[i].quantity

      if(receberDataBaseQuantidade == undefined){

        let dataBaseQuantidadeCorreta = 0
        broken_Database[i].quantity = dataBaseQuantidadeCorreta

      }
      
      
    }

// A função lerPrecos() é responsável por corrigir todos os preços que foram transformados em String 

    function lerPrecos(){

      let receberQuantidadePreco = broken_Database[i].price
      let dataBaseprecosCorretos = parseFloat(receberQuantidadePreco)

      broken_Database[i].price = dataBaseprecosCorretos
      
    } 
    

    lerNomes()
    lerQuantidades()
    lerPrecos()

    
    
  }

  
}




/*Funções de validação*/

/* A função 'ordenar()' irá retornar o resultado final do arquivo corrigido ordenado em crescente pelos números de ID e em ordem alfabética. */


function ordenar(){

  lerBancoDados()

    let acessorios = broken_Database
              .filter(p => p.category === "Acessórios")
              .sort((a, b) => a.id - b.id)
  
    let eletronicos = broken_Database
              .filter(p => p.category === "Eletrônicos")
              .sort((a, b) => a.id - b.id)
  
    let eletrodomesticos = broken_Database
              .filter(p => p.category === "Eletrodomésticos")
              .sort((a, b) => a.id - b.id)
  
    let panelas = broken_Database
              .filter(p => p.category === "Panelas")
              .sort((a, b) => a.id - b.id)
  
    
  let filtrado = [acessorios, eletrodomesticos ,eletronicos, panelas]

  console.log(filtrado)
  }
  


/* A função 'somaCategoria()' é responsável por devolver a somatória da quantidade de itens que temos em cada categoria */

  function somaCategoria(){

    lerBancoDados()

    let arrayEletronicos = broken_Database
            .filter(p => p.category === 'Eletrônicos')
            .reduce((acc, eletr)=> acc + eletr.quantity, 0)


    let arrayAcessorios = broken_Database
            .filter(p => p.category === 'Acessórios')
            .reduce((acc, eletr)=> acc + eletr.quantity, 0)


    let arrayEletrodomesticos = broken_Database
            .filter(p => p.category === 'Eletrodomésticos')
            .reduce((acc, eletr)=> acc + eletr.quantity, 0)

    let arrayPanelas = broken_Database
            .filter(p => p.category === 'Panelas')
            .reduce((acc, eletr)=> acc + eletr.quantity, 0)
    



    let somatoria = [
            {
              "Category": 'Eletrônicos',
              "Total_Quantidade": arrayEletronicos
            },
            {
              "Category": 'Eletrodomésticos',
              "Total_Quantidade": arrayEletrodomesticos
            },
            {
              "Category": 'Acessórios',
              "Total_Quantidade": arrayAcessorios,
            },
            {
              "Category": 'Panelas',
              "Total_Quantidade": arrayPanelas,
            }
    ]

    console.log(somatoria)
    }

    ordenar()
    somaCategoria()

// Function 'exportarSaidaJson' será responsável por criar um arquivo externo .JSON recebendo como input o banco de dados corrigido

    function exportarSaidaJson(){
        
      lerBancoDados()

    var fs = require('fs');
      fs.appendFile('saida.json', `${JSON.stringify(broken_Database)}`, function (err) {
        if (err) throw err;
        console.log('Saída.JSON criado');
      });
    }
  
    // exportarSaidaJson()
    