
export class UsuarioWireCard {

    ownId: string;
    fullname: string;
    email: string;
    birthDate: string;
    taxDocument: TaxDocumentObject;
    phone: PhoneObject;
    shippingAddress: ShippingAddressObject;
   

}

export class TaxDocumentObject {

    type: string;
    number: string;

}

export class ShippingAddressObject {
    city:  string;
    complement:  string;
    district:  string;
    street:  string;
    streetNumber:  string;
    zipCode:  string;
    state:  string;
    country:  string;
}



//PEDIDO

export class PedidoWireCard {

    ownId: string;
    amount: AmountObject;
    items: Array<ProductObject> = new Array< ProductObject > ();
    customer: CustomerObject;
}

export class CustomerObject {
    id: string;
}

export class AmountObject {
    currency: string = "BRL";
    subtotals: SubTotalObject;
}

export class SubTotalObject {
    discount: number  ;

}


export class ProductObject {
    product: string;
    category: string = "OTHER_CATEGORIES";
    quantity: string = "1";
    detail: string;
    price: number;
}

// PAGAMENTO

export class PagamentoCartaoWireCard {
    installmentCount: string;
    statementDescriptor: string = "CONAD 2021";
    fundingInstrument: FundingInstrumentCartaoObject;
    device: DeviceObject;
}

export class PagamentoBoletoWireCard {
    statementDescriptor: string = "CONAD 2021";
    fundingInstrument: FundingInstrumentBoletoObject;
    device: DeviceObject;
}


export class FundingInstrumentCartaoObject {
    method: string;
    creditCard: CreditCardObject; 
}

export class FundingInstrumentBoletoObject {
    method: string;
    boleto: BoletoObject; 
}

export class CreditCardObject {
    hash: string;
    store: string = "false";
    holder: HolderObject;
}

export class BoletoObject {
    expirationDate: string;
    instructionLines: InstructionLinesObject;  
    logoUri : string = "https://conad.adm.br/sistemas/inscricoes-api/img/logo.png";
}

export class InstructionLinesObject {
    "first": string;
    "second": string;
    "third": string;
}

export class HolderObject {
    fullname: string;
    birthdate: string;
    taxDocument: TaxDocumentObject;
    phone: PhoneObject;
    billingAddress: BillingAddressObject;
}

export class PhoneObject {
    countryCode: string;
    areaCode: string;
    number: string;
}

export class BillingAddressObject {
    city: string;
    district: string;
    street: string;
    streetNumber: string;
    zipCode: string;
    state: string;
    country: string;
}

export class DeviceObject {
    ip: string;
    geolocation: GeoLocationObject;
    userAgente: string;
    fingerprint: string;
}

export class GeoLocationObject {
    latitude: string;
    longitude: string;
}

// Dados do Pagamento 


export class Pagamento{
    erro: boolean;
    confirmado: boolean;
    processado: boolean;
    tipo: string = "B";
    alerts: any;
    dataVencimento: string;
    codigoBarras: string;
    valor: string;
    url: string;
}