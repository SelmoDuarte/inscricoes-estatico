import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { PedidoWireCard, FundingInstrumentBoletoObject, AmountObject, TaxDocumentObject, UsuarioWireCard, ProductObject, CustomerObject, CreditCardObject, HolderObject, PhoneObject, BillingAddressObject, DeviceObject, GeoLocationObject, SubTotalObject, PagamentoCartaoWireCard, FundingInstrumentCartaoObject, PagamentoBoletoWireCard, BoletoObject, InstructionLinesObject, ShippingAddressObject } from './wireCardObjects';
import jsencrypt from 'jsencrypt';
import { MoipCreditCard } from 'moip-sdk-js';


@Injectable({
  providedIn: 'root'
})
export class WireCardService {

//DESENV  private readonly API_URL_BASE = "https://sandbox.moip.com.br/v2/";
  private readonly API_URL_BASE = "https://api.moip.com.br/v2/";

  private readonly API_NOVO_USUARIO = this.API_URL_BASE + 'customers';  
  private readonly API_NOVO_PEDIDO = this.API_URL_BASE + 'orders';  
  private readonly API_NOVO_PAGAMENTO = this.API_URL_BASE + 'orders';    
  private readonly API_CONSULTA_PEDIDOS = this.API_URL_BASE +'orders?q=';  
  private readonly API_GET_PEDIDO = this.API_URL_BASE + 'orders/';  
  private readonly API_SETAR_NOTIFICACOES = this.API_URL_BASE + 'preferences/notifications';  
  


  private httpOptions = {
    headers: new HttpHeaders({
      'X-Requested-With': 'XMLHttpRequest',
      'Cache-Control':	'no-cache',
//DESENV      'Authorization':	'Basic ' + "U1NXTE4yM0lCUFVZTFNNWFJFQUtVSTdaNllFM01aQ1c6VFdIVkdRRVBKWEpOWEw2MUZWSVBRVklEUTlCM0lOQTVNM1Y0UTc1Rw==",
      'Authorization':	'Basic ' + "WVRDT0dQS1JPNExCUDQyV1pLRERIRE5DMktET1dDU1U6REtBRFNONzJLR1VFRk8zTUJVSk5GQUVNR0c4TDhDVVA0VFg5VUFRVw==",
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
    
  constructor(private http: HttpClient) { }

  addClienteForm() {
    var formObj = JSON.parse(localStorage.getItem("usuario"));  

    return this.addCliente(formObj.cpf);
  }

  addCliente(ownId) {
    var formObj = JSON.parse(localStorage.getItem("usuario"));  
   
    let usuarioWireCard = new UsuarioWireCard();

    usuarioWireCard.ownId = ownId ;
    usuarioWireCard.fullname = formObj.nome;
    usuarioWireCard.email = formObj.email;
    usuarioWireCard.birthDate = "1978-03-01";
    usuarioWireCard.taxDocument = new TaxDocumentObject();    
    usuarioWireCard.taxDocument.type = "CPF";
    usuarioWireCard.taxDocument.number = formObj.cpf;
    usuarioWireCard.shippingAddress = new ShippingAddressObject();
    usuarioWireCard.shippingAddress.city = formObj.cidade;
    usuarioWireCard.shippingAddress.complement = "";
    usuarioWireCard.shippingAddress.country = "BR";
    usuarioWireCard.shippingAddress.district = formObj.bairro;
    usuarioWireCard.shippingAddress.state = formObj.uf;
    usuarioWireCard.shippingAddress.street = formObj.endereco;
    usuarioWireCard.shippingAddress.streetNumber = "";
    usuarioWireCard.shippingAddress.zipCode = formObj.cep;

    let serializedForm = JSON.stringify(usuarioWireCard);

    return this.http.post(this.API_NOVO_USUARIO,serializedForm, this.httpOptions)
      .pipe(
         tap(console.log)
    );
  
  }


  addPedido(id_wirecard, form, valorCupom, listaProdutos) {
    var jsonUsuario = JSON.parse(localStorage.getItem("usuario"));  

    let formObj = form.getRawValue(); 

    let pedidoWireCard = new PedidoWireCard();
    pedidoWireCard.ownId = formObj.cpf ;
    pedidoWireCard.amount = new AmountObject();
    pedidoWireCard.amount.subtotals = new SubTotalObject();
    pedidoWireCard.amount.subtotals.discount = Number(Number(valorCupom) * 100);;

    var e: any;
    for (e of listaProdutos){
      var productObject: ProductObject = new ProductObject();
      productObject.product = e.descricao;
      productObject.detail = e.detalhe;
      productObject.price = Number(Number(e.valor) * 100);
      pedidoWireCard.items.push(productObject);
    }
    pedidoWireCard.customer = new CustomerObject(); 
    pedidoWireCard.customer.id = id_wirecard;

    let serializedForm = JSON.stringify(pedidoWireCard);

    return this.http.post(this.API_NOVO_PEDIDO,serializedForm, this.httpOptions)
      .pipe(
         tap(console.log)
    );
  
  }
  
  addPagamentoCartao(id_ord, f, hash) {

    let form = f.getRawValue(); 

      let pagamentoWireCard = new PagamentoCartaoWireCard();
      pagamentoWireCard.installmentCount = form.cc_qtd_parcelas ;
      pagamentoWireCard.fundingInstrument = new FundingInstrumentCartaoObject();
      pagamentoWireCard.fundingInstrument.method = "CREDIT_CARD";
      pagamentoWireCard.fundingInstrument.creditCard = new CreditCardObject();
      pagamentoWireCard.fundingInstrument.creditCard.hash = hash ;
      pagamentoWireCard.fundingInstrument.creditCard.store = "false";
      pagamentoWireCard.fundingInstrument.creditCard.holder = new HolderObject();
      pagamentoWireCard.fundingInstrument.creditCard.holder.fullname = form.nome;
      pagamentoWireCard.fundingInstrument.creditCard.holder.birthdate = "1978-03-01";
      pagamentoWireCard.fundingInstrument.creditCard.holder.taxDocument = new TaxDocumentObject();
      pagamentoWireCard.fundingInstrument.creditCard.holder.taxDocument.type = "CPF";
      pagamentoWireCard.fundingInstrument.creditCard.holder.taxDocument.number = form.cpf;
      pagamentoWireCard.fundingInstrument.creditCard.holder.phone = new PhoneObject();
      pagamentoWireCard.fundingInstrument.creditCard.holder.phone.countryCode = "55";
      pagamentoWireCard.fundingInstrument.creditCard.holder.phone.areaCode = "";
      pagamentoWireCard.fundingInstrument.creditCard.holder.phone.number = "";
      pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress = new BillingAddressObject();
      pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.city = form.cidade;
      pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.district = "";
      pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.street = form.logradouro;
      pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.streetNumber = "";
      pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.zipCode = form.cep.replace(".","").replace("-","");    
      pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.state= form.uf;
      pagamentoWireCard.fundingInstrument.creditCard.holder.billingAddress.country = "BRA";
      pagamentoWireCard.device = new DeviceObject();
      pagamentoWireCard.device.ip = "127.0.0.1";
      pagamentoWireCard.device.geolocation = new GeoLocationObject();
      pagamentoWireCard.device.geolocation.latitude = "-33.867";
      pagamentoWireCard.device.geolocation.longitude = "151.206";
      pagamentoWireCard.device.userAgente = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36";
      pagamentoWireCard.device.fingerprint = "QAZXswedCVGrtgBNHyuj";    
  
      let serializedForm = JSON.stringify(pagamentoWireCard);
  
      return this.http.post(this.API_NOVO_PAGAMENTO + "/" + id_ord + "/payments"  ,serializedForm, this.httpOptions)
        .pipe(
           tap(console.log)
      );      
   
  }

  addPagamentoBoleto(id_ord, f) {

    var diasVencimento = 5;
    var dataVencimento = new Date(Date.now() + diasVencimento * 24*60*60*1000);
    let dataAtualFormatada = (this.adicionaZero(dataVencimento.getFullYear().toString()) + "-" + (this.adicionaZero(dataVencimento.getMonth()+1).toString()) + "-" + this.adicionaZero(dataVencimento.getDate()));


    let form = f.getRawValue(); 

      let pagamentoWireCard = new PagamentoBoletoWireCard();

      pagamentoWireCard.fundingInstrument = new FundingInstrumentBoletoObject();
      pagamentoWireCard.fundingInstrument.method = "BOLETO";

      pagamentoWireCard.fundingInstrument.boleto = new BoletoObject();
      pagamentoWireCard.fundingInstrument.boleto.expirationDate = dataAtualFormatada;
      pagamentoWireCard.fundingInstrument.boleto.instructionLines = new InstructionLinesObject();
      pagamentoWireCard.fundingInstrument.boleto.instructionLines.first = "CONAD 2021 - Congresso Nacional de Administração"
      pagamentoWireCard.fundingInstrument.boleto.instructionLines.second = "Isncrição para o evento";
      pagamentoWireCard.fundingInstrument.boleto.instructionLines.third = "";

      pagamentoWireCard.device = new DeviceObject();
      pagamentoWireCard.device.ip = "127.0.0.1";
      pagamentoWireCard.device.geolocation = new GeoLocationObject();
      pagamentoWireCard.device.geolocation.latitude = "-33.867";
      pagamentoWireCard.device.geolocation.longitude = "151.206";
      pagamentoWireCard.device.userAgente = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.81 Safari/537.36";
      pagamentoWireCard.device.fingerprint = "QAZXswedCVGrtgBNHyuj";    
  
      let serializedForm = JSON.stringify(pagamentoWireCard);
  
      return this.http.post(this.API_NOVO_PAGAMENTO + "/" + id_ord + "/payments"  ,serializedForm, this.httpOptions)
        .pipe(
           tap(console.log)
      );      
   
  }

 
  consultaPedidos(cpf) {
      return this.http.get(this.API_CONSULTA_PEDIDOS + cpf + "&limit=1" , this.httpOptions)
        .pipe(
           tap(console.log)
      );      
  }

  configurarNotificacoes() {
    return this.http.post(this.API_SETAR_NOTIFICACOES, {
      "events": [
        "PAYMENT.AUTHORIZED",
        "PAYMENT.CANCELLED"
      ],
      "target": "http://conad.adm.br/sistemas/inscricoes-api/api/inscricoes/notificacoes.php",
      "media": "WEBHOOK"
    }  , this.httpOptions)
      .pipe(
         tap(console.log)
    );      
}


  getPedido(id_pedido) {
    return this.http.get(this.API_GET_PEDIDO + id_pedido, this.httpOptions)
      .pipe(
         tap(console.log)
    );      
}

adicionaZero(numero){
  if (numero <= 9) 
      return "0" + numero;
  else
      return numero; 
}


}