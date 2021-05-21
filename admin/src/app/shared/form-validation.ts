import { AbstractControl, FormGroup, ValidationErrors, FormArray, FormControl } from '@angular/forms';
import { MsgAlerta } from './models/msgAlerta';

export interface FormGroupControls {
  [key: string]: AbstractControl;
}

export function getFormValidationErrors(controls: FormGroupControls) {
  let listErros: MsgAlerta[] = [] ;
  Object.keys(controls).forEach(key => {
    const control = controls[ key ];
    if (control instanceof FormGroup) {
      listErros = listErros.concat(getFormValidationErrors(control.controls));
    }
    const controlErrors: ValidationErrors = controls[ key ].errors;
    if (controlErrors !== null) {
      Object.keys(controlErrors).forEach(keyError => {
        console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
        listErros.push({type: "danger" , message: getErrorMsg(key, keyError, controlErrors[keyError])});
      });
    }
  });
  console.log(listErros);
  return listErros;
}

export function getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
  const config = {
    'required': `${getLabelAllFields(fieldName)} é obrigatório.`,
    'dataInvalida': `${getLabelAllFields(fieldName)} inválida. (dd/mm/yyyy)`,
    'minlength': `${getLabelAllFields(fieldName)} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
    'maxlength': `${getLabelAllFields(fieldName)} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
    'cepInvalido': 'CEP inválido.',
    'emailInvalido': 'Email já cadastrado!',
    'email': 'Email já cadastrado!',
    'ngbDate': 'Selecione a data',
    'equalsTo': 'Campos não são iguais',
    'pattern': 'Campo inválido'
  };

  return config[validatorName];
}

export function getLabelAllFields(fieldName: string) {
  const config = {
    'cpf': 'CPF',
    'nome': 'Nome',
    'tipo': 'Tipo',
    'codigo': 'Codigo',
    'email': 'Email',
    'celular': 'Celular',
    'dataNascimento': 'Data de Nascimento',
    'sexo': 'Sexo',
    'estadoCivil': 'Estado Civil',
    'pai': 'Pai',
    'mae': 'Mãe',
    'nacionalidade': 'Nacionalidade',
    'naturalidade': 'Naturalidade',
    'rg': ' Num. RG',
    'orgaoExpedidor': 'Orgão Expedidor',
    'dataExpedicao': 'Data Expedição',
    'tituloEleitor': 'Titulo de Eleitor',
    'senha': 'Senha',
    'responsavel': 'Responsável',
    'tema':'Tema',

    'inscricao': 'Inscrição',
    'situacao' : 'Situação',
    'processo': 'Nº processo',
    'dataInscricao' : 'Data de Inscrição',
    'habilitacao': 'Habilitação',
    'vencimento': 'Data Vencimento',
    'dataCadastro': 'Data do Cadastro',
    'status': 'Status Atual',
    'ano_conclusao': 'Ano de Conclusão',

    'cep': 'CEP',
    'numero': 'Numero',
    'complemento': 'Complemento',
    'rua': 'Rua',
    'logradouro': 'Logradouro',
    'bairro': 'Bairro',
    'cidade': 'Cidade',
    'uf': 'UF',

    'ies': 'IES',
    'curso': 'Curso',
    'periodo': 'Período',
    'data' : 'Data',
    'hora': 'Hora',
    'descricao': 'Descrição',
    'palestrante': 'Palestrante',
    'carga_horaria': 'Carga Horária',
    'inscricoes_abertas': 'Inscrições Abertas ?',
    'local': 'Local',
    'prazo': 'Prazo',
    'ies_empresa' : 'IES/Empresa',
    'repita_senha' : 'Repita a Senha',    
    };		

  return config[fieldName];
}



export function requiredMinCheckbox(min = 1) {
  const validator = (formArray: FormArray) => {
    /* const values = formArray.controls;
    let totalChecked = 0;
    for (let i = 0; i < values.length; i++) {
      if (values[i].value) {
        totalChecked += 1;
      }
    } */
    const totalChecked = formArray.controls
      .map(v => v.value)
      .reduce((total, current) => current ? total + current : total, 0);
    return totalChecked >= min ? null : { required: true };
  };
  return validator;
}

export function cepValidator(control: FormControl) {

  const cep = control.value;
  if (cep && cep !== '') {
    const validacep = /^[0-9]{8}$/;
    return validacep.test(cep) ? null : { cepInvalido : true };
  }
  return null;
}

export function equalsTo(otherField: string) {
  const validator = (formControl: FormControl) => {
    if (otherField == null) {
      throw new Error('É necessário informar um campo.');
    }

    if (!formControl.root || !(<FormGroup>formControl.root).controls) {
      return null;
    }

    const field = (<FormGroup>formControl.root).get(otherField);

    if (!field) {
      throw new Error('É necessário informar um campo válido.');
    }

    if (field.value !== formControl.value) {
      return { equalsTo : otherField };
    }

    return null;
  };
  return validator;
}