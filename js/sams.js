// create the controller and inject Angular's $scope
scotchApp.controller('samsController', function($scope) {


 $scope.player_nome = "";
        $scope.player_end = "";
        $scope.player_bairro = "";
        $scope.player_cidade = "";
        $scope.player_uf = "";
        $scope.player_ddd = "";
        $scope.player_telefone = "";
        $scope.player_horario = "";

        $scope.players = [
        {
            "nome":"Amazoncell",
            "end":"Av Djalma Batista, 1109",
            "bairro":"Sao Geraldo",
            "cidade":"Manaus",
            "uf":"AM",
            "ddd":92,
            "telefone":"3086-2220 / 3084-1369",
            "horario":"SEG A SEX (08:00 -17:00) E SAB (08:00-12:00)"
        },
        {
            "nome":"Loja do Celular Sorocaba Centro",
            "end":"Rua Souza Pereira, 358",
            "bairro":"Centro",
            "cidade":"Sorocaba",
            "uf":"SP",
            "ddd":15,
            "telefone":"3224-3550/ 32338367",
            "horario":"SEG A SEX (09:00-18:00) e SAB (09:00-12:00)"
        },
        {
            "nome":"Motorola Duque de Caxias",
            "end":"Praca Roberto Silveira, 360 Loja",
            "bairro":"25 de Agosto",
            "cidade":"Duque de Caxias",
            "uf":"RJ",
            "ddd":21,
            "telefone":"3652-0455/ 3653-0744 / 3848-1818 / 3842-4141",
            "horario":"SEG A SEX (09:00-18:00) E SAB (09:00-13:00)"
        },
        {
            "nome":"Cell Mania",
            "end":"Av. Hermes Fontes, 1340",
            "bairro":"Suissa",
            "cidade":"Aracaju",
            "uf":"SE",
            "ddd":79,
            "telefone":"32466281",
            "horario":"SEG A SEX (08:00-18:00)"
        },
        {
            "nome":"Golden Cell",
            "end":"Rua Palmira Ninho, 79 - Loja 04",
            "bairro":"Alcantara",
            "cidade":"Sao Goncalo",
            "uf":"RJ",
            "ddd":21,
            "telefone":"2614-7103",
            "horario":"SEG A SEX ( 09:00 - 18:00) E SAB (09:00-13:00)"
        },
        {
            "nome":"Telepoint",
            "end":"Estrada do Portela, 99 - L 232",
            "bairro":"Madureira",
            "cidade":"Rio de Janeiro",
            "uf":"RJ",
            "ddd":21,
            "telefone":"2450-4331/ 2450-4415",
            "horario":"SEG A SEX (09:00-18:00) E SAB (09:00-13:00)"
        },
        {
            "nome":"Vale Cell Telecom SJ Campos",
            "end":"Av. Doutor  Nelson D`avila, 1049",
            "bairro":"Jd Vl Parariso",
            "cidade":"Sao Jose dos Campos",
            "uf":"SP",
            "ddd":12,
            "telefone":"3308-0377",
            "horario":"SEG A SEX (09:00-18:00) E SAB (09:00-13:00)"
        },
        {
            "nome":"Motocell Telecom",
            "end":"Avenida Assis Chateaubriand, 1608",
            "bairro":"Setor Oeste",
            "cidade":"Goiania",
            "uf":"GO",
            "ddd":62,
            "telefone":"40051800",
            "horario":"SEG A SEX (09:00-17:00) E SAB (09:00-12:00)"
        },
        {
            "nome":"Loja do Celular Campinas Centro",
            "end":"Barao de Jaguara, 707 - loja 25",
            "bairro":"Centro",
            "cidade":"Campinas",
            "uf":"SP",
            "ddd":19,
            "telefone":"32344998",
            "horario":"SEG A SEX (09:00-18:00) e SAB (09:00-12:00)"
        },
        {
            "nome":"Cellcity Vitoria",
            "end":"Av. Americo Buaiz, 200",
            "bairro":"Enseada do Sua",
            "cidade":"Vitoria",
            "uf":"ES",
            "ddd":27,
            "telefone":"3335-1007/ 3335-1006",
            "horario":"SEG A SEX(10:00-19:00)"
        },
        {
            "nome":"Megacenter - Regional Prudente",
            "end":"Rua Dr. Jose Foz, 139",
            "bairro":"Bosque",
            "cidade":"Presidente Prudente",
            "uf":"SP",
            "ddd":18,
            "telefone":"32226400",
            "horario":"SEG A SEX (8:00 - 18:00)"
        },
        {
            "nome":"Cellmoto Telecom",
            "end":"Avenida Industrial, 661",
            "bairro":"Jardim",
            "cidade":"Santo Andre",
            "uf":"SP",
            "ddd":11,
            "telefone":"44277700",
            "horario":"SEG A SEX (09:00 - 17:30) e SAB (09:00-13:00)"
        },
        {
            "nome":"Celular Osasco",
            "end":"Rua Tenente Avelar Pires de Azevedo, 140",
            "bairro":"Centro",
            "cidade":"Osasco",
            "uf":"SP",
            "ddd":11,
            "telefone":"3699-2626",
            "horario":"SEG A SEX (9:30 - 18:30) E SAB (10:00-14:00)"
        },
        {
            "nome":"Motorola Nova IguaÃ§u",
            "end":"Av Governador Amaral Peixoto, 427",
            "bairro":"Centro",
            "cidade":"Nova Iguacu",
            "uf":"RJ",
            "ddd":21,
            "telefone":"3844-4141/ 3850-1818/ 2698-5596",
            "horario":"SEG A SEX (09:00-18:00) E SAB (09:00-14:00)"
        },
        {
            "nome":"Palmas Cell Express",
            "end":"Q 104 SUL RUA SE 9 - N 16",
            "bairro":"Plano Diretor Sul",
            "cidade":"Palmas",
            "uf":"TO",
            "ddd":63,
            "telefone":"32158888",
            "horario":"SEG A SEX (9:00-18:00) E SAB (09:00-12:00)"
        },
        {
            "nome":"High Tech Celular",
            "end":"ST SHCS CL Quadra 411, Bloco A, Lj 06 e 08",
            "bairro":"Asa Sul",
            "cidade":"Brasilia",
            "uf":"DF",
            "ddd":61,
            "telefone":"33455454",
            "horario":"SEG A SEX (09:00-18:00) E SAB (09:00-13:00)"
        },
        {
            "nome":"Melhor Assistencia",
            "end":"Rua Comendador Palmeira, 493 - SALA 07",
            "bairro":"Farol",
            "cidade":"Maceio",
            "uf":"AL",
            "ddd":82,
            "telefone":"3326-1070",
            "horario":"SEG A SEX (08:00-17:00)"
        },
        {
            "nome":"Cesut Telecom",
            "end":"AV . Pontes Viera, 2001 - loja 101",
            "bairro":"Dionisio Torres",
            "cidade":"Fortaleza",
            "uf":"CE",
            "ddd":85,
            "telefone":"3034-0444/ 3034-0464",
            "horario":"SEG A SEX (09:00-18:00) E SAB (08:00-12:00)"
        },
        {
            "nome":"Mototec ServiÃ§os",
            "end":"Rua Miguel Rosa, 3305",
            "bairro":"Centro",
            "cidade":"Teresina",
            "uf":"PI",
            "ddd":86,
            "telefone":"3221-3866",
            "horario":"SEG A SEX (8:30-17:30) E SAB (8:00 -12:00)"
        },
        {
            "nome":"Motoassist Melhorcell",
            "end":"R Desembargador Jose Peregrino, 217 L1",
            "bairro":"Centro",
            "cidade":"Joao Pessoa",
            "uf":"PB",
            "ddd":83,
            "telefone":"3222-5491",
            "horario":"SEG A SEX (08:00-18:00)"
        },
        {
            "nome":"Motovision",
            "end":"Av Cel Colares Moreira, 02 - Loja 04",
            "bairro":"Jardim Renascenca",
            "cidade":"Sao Luis",
            "uf":"MA",
            "ddd":98,
            "telefone":"3235-0300",
            "horario":"SEG A SEX (08:00-18:00) E SAB (08:00-12:00)"
        },
        {
            "nome":"Help ManutenÃ§ão - Porto Alegre",
            "end":"Rua Botafogo, 735",
            "bairro":"Menino de Deus",
            "cidade":"Porto Alegre",
            "uf":"RS",
            "ddd":51,
            "telefone":"30258200",
            "horario":"SEG A SEX (09:00-17:30) E SAB (09:00 - 13:00)"
        },
        {
            "nome":"M Celulares",
            "end":"Rua General Osorio,222",
            "bairro":"Centro",
            "cidade":"Porto Velho",
            "uf":"RO",
            "ddd":69,
            "telefone":"3229-3033",
            "horario":"SEG A SEX (09:00-17:15) E SAB (09:00 - 12:00)"
        },
        {
            "nome":"Wb Celulares",
            "end":"Avenida Amazonas, 100",
            "bairro":"Centro",
            "cidade":"Belo Horizonte",
            "uf":"MG",
            "ddd":31,
            "telefone":"3241-2416",
            "horario":"SEG A SEX (09:00-18:00) E SAB (08:00-12:00)"
        },
        {
            "nome":"Belem Cell Express",
            "end":"TV Sao Pedro, 769",
            "bairro":"Batista Campos",
            "cidade":"Belem",
            "uf":"PA",
            "ddd":91,
            "telefone":"32415060",
            "horario":"SEG A SEX(09:00-18:00) E SAB (09:00-12:00)"
        },
        {
            "nome":"Help Manutencao Celular - Sao Paulo",
            "end":"Rua Azevedo Soares, 973",
            "bairro":"Vila Gomes Cardim",
            "cidade":"Sao Paulo",
            "uf":"SP",
            "ddd":11,
            "telefone":"20900110",
            "horario":"SEG A SEX (08:30 - 17:00) E SAB (08:00- 12:00)"
        },
        {
            "nome":"Help Manutencao Celular - Curitiba",
            "end":"Av. Presidente Arthur Bernardes, 172",
            "bairro":"Portao",
            "cidade":"Curitiba",
            "uf":"PR",
            "ddd":41,
            "telefone":"3111-8819 - 31118826",
            "horario":"SEG A SEX (08:30-17:00)"
        },
        {
            "nome":"Help Assistencia Tecnica de Celulares - Florianopolis",
            "end":"Av. Rio Branco, 213",
            "bairro":"Centro",
            "cidade":"Florianopolis",
            "uf":"SC",
            "ddd":48,
            "telefone":"30248060",
            "horario":"SEG A SEX (08:30 - 18:00)"
        },
        {
            "nome":"Pll Salvador",
            "end":"Rua Frederico Simoes, 125",
            "bairro":"Caminho das Arvores",
            "cidade":"Salvador",
            "uf":"BA",
            "ddd":71,
            "telefone":"71) 3045-6700 (71) 3013-7707",
            "horario":"SEG A SEX (08:00-17:00) E SAB (08:00-12:00)"
        },
        {
            "nome":"Tec cel",
            "end":"Av. Mato Grosso, 601",
            "bairro":"Centro",
            "cidade":"Campo Grande",
            "uf":"MS",
            "ddd":67,
            "telefone":"30435644",
            "horario":"SEG A SEX (08:00-18:00) E SAB (08:00-12:00)"
        },
        {
            "nome":"Pll Angelica",
            "end":"Av. Angelica, 2.578",
            "bairro":"Consolacao",
            "cidade":"Sao Paulo",
            "uf":"SP",
            "ddd":11,
            "telefone":"Sem Numero",
            "horario":"SEG A SEX (09:00 - 17:30) e SAB (09:00 - 13:00)"
        },
        {
            "nome":"Vale Cell Express - SJ Campos",
            "end":"Avenida Andromeda, 3603/3607",
            "bairro":"Bosque dos Eucaliptos",
            "cidade":"Sao Jose dos Campos",
            "uf":"SP",
            "ddd":12,
            "telefone":"33080067",
            "horario":"SEG A SEX (9:00-18:00) Sab (9:00 -13:00)"
        },
        {
            "nome":"Valecell - São Paulo",
            "end":"Avenida Sao Luis, 187 - 1 sb loja 09",
            "bairro":"Centro",
            "cidade":"Sao Paulo",
            "uf":"SP",
            "ddd":11,
            "telefone":"2721-8800/  3138-3150",
            "horario":"SEG A SEX (09 :00- 17:00) E SAB (09:00- 12:00)"
        },
        {
            "nome":"Pll Moema",
            "end":"Av. Ibirapuera, 3411",
            "bairro":"Indianopolis",
            "cidade":"Sao Paulo",
            "uf":"SP",
            "ddd":11,
            "telefone":"50963208/ 23051397/ 50937357",
            "horario":"SEG A SEX (09:00-17:30) E SAB (09:00-13:00)"
        },
        {
            "nome":"Pll Centro RJ",
            "end":"AV Santa Luzia, 651",
            "bairro":"Centro",
            "cidade":"Rio de Janeiro",
            "uf":"RJ",
            "ddd":21,
            "telefone":"2210-6015",
            "horario":"SEG A SEX (09:00-18:00)"
        },
        {
            "nome":"Connect Mobile - Cuiaba",
            "end":"Av. Getulio Vargas, 700",
            "bairro":"Centro",
            "cidade":"Cuiaba",
            "uf":"MT",
            "ddd":65,
            "telefone":"30529430/ 30274830",
            "horario":"SEG A SEX (09:00-18:00)"
        },
        {
            "nome":"Connect Mobile - Juiz de Fora",
            "end":"Avenida Presidente Itamar Franco,1750",
            "bairro":"Sao Mateus",
            "cidade":"Juiz de Fora",
            "uf":"MG",
            "ddd":32,
            "telefone":"3216-3560/3084-5447",
            "horario":"SEG A SEX (09:00-18:00)"
        },
        {
            "nome":"Megacenter Care Technology - Marilia",
            "end":"Rua Arco Verde, 508",
            "bairro":"Alto Cafezal",
            "cidade":"Marilia",
            "uf":"SP",
            "ddd":14,
            "telefone":"981432134  - 981434957",
            "horario":"SEG A SEX (08:00-17:30)"
        },
        {
            "nome":"Dactel Niteroi",
            "end":"Avenida Ernani do Amaral Peixoto, 207, Loja 103",
            "bairro":"Centro",
            "cidade":"Niteroi",
            "uf":"RJ",
            "ddd":21,
            "telefone":"36281818/ 36284141",
            "horario":"SEG A SEX (9:00 - 18:40)"
        },
        {
            "nome":"Ducatel Campos",
            "end":"Rua 13 de maio, 125",
            "bairro":"Centro",
            "cidade":"Campo dos Goytacazes",
            "uf":"RJ",
            "ddd":22,
            "telefone":"27316156",
            "horario":"SEG A SEX(09:00-18:00) E SAB (09:00-12:00)"
        },
        {
            "nome":"Jota9 Celulares Megacenter Ribeirão",
            "end":"R. Olavo Bilac, 1092",
            "bairro":"Jardim Sumare",
            "cidade":"Ribeirao Preto",
            "uf":"SP",
            "ddd":16,
            "telefone":"32354004 / 32354003",
            "horario":"SEG A SEX (08:00-18:00)"
        },
        {
            "nome":"Telemobile",
            "end":"A. Marcos de Freitas costa, 11",
            "bairro":"Daniel Fonseca",
            "cidade":"Uberlandia",
            "uf":"MG",
            "ddd":34,
            "telefone":"3223-8009",
            "horario":"SEG A SEX(09:00-17:00) E SAB (08:00-12:00)"
        },
        {
            "nome":"Info Service",
            "end":"Av Antonio Basilio, 3006",
            "bairro":"Lagoa Nova",
            "cidade":"Natal",
            "uf":"RN",
            "ddd":84,
            "telefone":"3201-0484",
            "horario":"SEG A SEX(09:00-18:00) E SAB (09:00-13:00)"
        },
        {
            "nome":"Celular Sao Bernardo",
            "end":"Av Rotary, 825",
            "bairro":"Centro",
            "cidade":"Sao Bernardo do Campo",
            "uf":"SP",
            "ddd":11,
            "telefone":"4338-4544",
            "horario":"SEG A SEX(09:00-18:00) E SAB (09:00-13:00)"
        },
        {
            "nome":"Dactel Barra",
            "end":"Av das Americas, 700",
            "bairro":"Barra da Tijuva",
            "cidade":"Rio de Janeiro",
            "uf":"RJ",
            "ddd":21,
            "telefone":"2494-9242 / 2494-5102",
            "horario":"SEG A SEX(09:00-18:00) E SAB (09:00-13:00)"
        },
        {
            "nome":"Connect Sta Maria",
            "end":"R Barao de Souza Leao, 1139",
            "bairro":"Boa Viagem",
            "cidade":"Recife",
            "uf":"PE",
            "ddd":81,
            "telefone":"3038-1349 / 3038-0459 ",
            "horario":"SEG A SEX(09:00-18:00) "
        },
        {
            "nome":"Myphone Celulares",
            "end":"R Alagoas, 1130",
            "bairro":"Funcionario",
            "cidade":"Belo HOrizonte",
            "uf":"MG",
            "ddd":31,
            "telefone":"32254881 - 35679029",
            "horario":"SEG A SEX(09:00-18:00) E SAB (09:00-13:00)"
        },
        {
            "nome":"Megacenter Care Technology - Bauru",
            "end":"R Gustavo Maciel, Quadra,2150",
            "bairro":"Jardim Nasralla",
            "cidade":"Bauru",
            "uf":"SP",
            "ddd":14,
            "telefone":"3208-1532",
            "horario":"SEG A SEX(08:00-17:30) "
        },
        {
            "nome":"3G Celulares",
            "end":"Av. Epaminondas Jacome, 2792, Sala 218",
            "bairro":"Centro",
            "cidade":"Rio Branco",
            "uf":"AC",
            "ddd":68,
            "telefone":" 3223-9195",
            "horario":"SEG A SEX(08:00-17:00)  E SAB (08:00-12:00)"
        },
        {
            "nome":"Loja do Celular Campinas Flamboyant",
            "end":"Av. Jose Bonifacio, 159",
            "bairro":"Jardim Flamboyant",
            "cidade":"Campinas",
            "uf":"SP",
            "ddd":19,
            "telefone":"3254-3783",
            "horario":"Segunda a sexta: 08:00 hrs as 17:00 hrs.\nSábado: 09:00 hrs as 12:00 hrs."
        }
        ]



});