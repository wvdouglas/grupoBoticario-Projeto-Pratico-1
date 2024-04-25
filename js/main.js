const produtos = [{
    nome: "Produto 1",
    descricao: "3 mil visualizações",
    preco: "59,90",
    precoanterior:"100,00",
    imagem: "https://ervik.vtexassets.com/arquivos/ids/156270-800-auto?v=638487917556930000&width=800&height=auto&aspect=true"
  },
  {
    nome: "Produto 2",
    descricao: "3 mil visualizações",
    preco: "69,90",
    precoanterior:"100,00",
    imagem: "https://pinkperfect.com.br/cdn/shop/files/Capa_ba9c74b6-daa3-4668-8725-80a377a0fd19.png?v=1708525987&width=600"
  },
  {
    nome: "Produto 3",
    descricao: "3 mil visualizações",
    preco: "79,90",
    precoanterior:"100,00",
    imagem: "https://d1g2ab1f83fbfh.cloudfront.net/media/catalog/product/cache/9c770b6c7ab808456c12a4ba6fe2fd56/t/r/true-skin-pag-produto-noorskin.png"
  },
  {
    nome: "Produto 4",
    descricao: "3 mil visualizações",
    preco: "69,90",
    precoanterior:"100,00",
    imagem: "https://static.stealthelook.com.br/wp-content/uploads/2022/09/produto-de-beleza-premio-best-of-beauty-allure-natura-ekos-20220916215435.jpg"
  },
  {
    nome: "Produto 5",
    descricao: "3 mil visualizações",
    preco: "69,90",
    precoanterior:"100,00",
    imagem: "https://cdn.awsli.com.br/600x450/2539/2539916/produto/198400720/fps_4707-iromex.jpg"
  },

  {
    nome: "Produto 6",
    descricao: "3 mil visualizações",
    preco: "69,90",
    precoanterior:"100,00",
    imagem: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_1800,c_limit/e_trim/v1/imagens/product/KT001997/f51672d7-1167-4d31-a13f-957d46cc4313-kit-beleza-na-web-loreal-paris-para-pele-e-cabelo-4-produtos.png"
  },
  {
    nome: "Produto 7",
    descricao: "3 mil visualizações",
    preco: "69,90",
    precoanterior:"100,00",
    imagem: "https://www.elhombre.com.br/wp-content/uploads/2015/06/carlsberg-produto-de-beleza-el-hombre.jpg"
  },
  {
    nome: "Produto 8",
    descricao: "3 mil visualizações",
    preco: "69,90",
    precoanterior:"100,00",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_YlvpjkDJ3FsW0pFaA_ShCVGCVXIgahVo6yvQPLICEg&s"
  },
  {
    nome: "Produto 9",
    descricao: "3 mil visualizações",
    preco: "69,90",
    precoanterior:"100,00",
    imagem: "https://www.amend.com.br/on/demandware.static/-/Sites-siteCatalog_Amend/default/dw13a36842/Kits/Beleza%20na%20bolsa/kit-amend-beleza-na-bolsa-i-3-produtos-mascara-hidratacao-mascara-reconstrucao-e-leave-in-kit-500.png"
  },
]
const listaProdutos = document.querySelector('.lista-produtos-destaque');

function exibirProdutos(listaDeProdutos){

    for(let i=0; i < produtos.length; i++){
        listaProdutos.innerHTML +=`
        <li class="item-produtos-destaque">
            <img class="imagem-destaque-produto" src="${produtos[i].imagem}" alt="">
            <h3 class="nome-produto">${produtos[i].nome}</h3>
            <h4 class="preço-produto">De: R$${produtos[i].precoanterior}</h4>
            <h2 class="preço-promocao"><span class="cifrao">R$</span><span class="preço-promocao-grande">${produtos[i].preco}</span></h2>
            <a href="#"><img class="icon-coracao" src="img/coracao.png" alt=""></a>
        </li>  
        `
    }

}

exibirProdutos(produtos)

