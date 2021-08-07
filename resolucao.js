
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
 
  // "For" irá ler todos os elementos dentro do da estrutura broken_DataBase que recebe o JSON.

  for (var i = 0; i < broken_Database.length; i++){

    function lerNomes(){
      let receberDataBaseNames = broken_Database[i].name
      let caracteresCorretos = [
          "Conjunto de Panelas antiaderentes com 05 Peças Paris",
          "Lava e Seca 10,2 Kg Samsung Eco Bubble Branca com 09 Programas de Lavagem",
          "Refrigerador bottom Freezer Electrolux de 02 Portas Frost Free com 598 Litros",
          "Fogão de Piso Electrolux de 04 bocas, Mesa de Vidro Prata",
          "Forno Micro-ondas Panasonic com capacidade de 21 Litros branco",
          "Smart TV 4K Sony LED 65” 4K X-Reality Pro, UpScalling, Motionflow XR 240 e Wi-Fi",
          "Home Theater LG com Blu-ray 3D, 5.1 canais e 1000W",
          "Kit Gamer acer - Notebook + Headset + Mouse",
          "Monitor 29 LG FHD Ultrawide com 1000:1 de contraste",
          "Mouse Gamer Predator cestus 510 Fox Preto",
      ]
      var nomesCorretos = receberDataBaseNames.replace(receberDataBaseNames, caracteresCorretos[i])

      return broken_Database[i].name = nomesCorretos
      
    } 
    
    
    // Function readQuantities() é função responsável por verificar qual elemento do objeto broken_dataBase está sendo a propriedade "quantity" e inclui-lás com valor 0
    function lerQuantidades(){

      let receberDataBaseQuantidade = broken_Database[i].quantity

      if(receberDataBaseQuantidade == undefined){
        let dataBaseQuantidadeCorreta = 0
        return broken_Database[i].quantity = dataBaseQuantidadeCorreta
      }
      
      // console.log(showDataBaseQuantities)

    }

    // Function readPrice() é função responsável por corrigir todos os preços que foram transformados em String ----

    function lerPrecos(){

      let receberQuantidadePreco = broken_Database[i].price
      let dataBaseprecosCorretos = parseFloat(receberQuantidadePreco)

      return broken_Database[i].price = dataBaseprecosCorretos
      
    } 
    

    lerNomes()
    lerQuantidades()
    lerPrecos()

    
    
  }
  
}




/*Funções de validação*/

/* A função 'ordemAlfabetica' irá retornar o resultado final do arquivo corrigido ordenado em crescente pelos números de ID e em ordem alfabética. */

function ordenar(){

  lerBancoDados()

  function ordemAlfabetica(){
    var ordemAlfabetica = broken_Database.sort((a, b) => a.category < b.category ? -1 : true)
    console.log(ordemAlfabetica)
  }
    
  function ordemId(){
    var ordemId = broken_Database.sort((a, b) => a.id - b.id)
    console.log(ordemId)
  }

  ordemAlfabetica()
  ordemId()
}


/* A função 'somaCategoria' é responsável por devolver a somatória da quantidade de itens que temos em cada categoria */

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
  
  let somatoria = [{
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
  }]

  
  console.log(somatoria)

}




ordenar()
somaCategoria()







