import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

class App extends Component {
  render() {
    return(
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.mainTitle}> Vagas </Text>
          <View style={styles.jobArea}>
            <Text style={styles.jobPosition}> Desenvolvedor Frontend Jr - React </Text>
            <Text style={{ fontWeight:'600'}}> Descrição: </Text>
            <Text style={styles.jobDetails}> Contribuir no processo de 
            avaliação da aplicabilidade das demandas de alterações 
            relacionadas aos sistemas internos, do aspecto técnico 
            de desenvolvimento de software, mediante análise de requisitos 
            para entendimento das demandas e participação no processo de 
            dimensionamento dos recursos necessários.
            </Text>
            <Text style={{ fontWeight:'600'}}> Salário: </Text>
            <Text style={styles.jobDetails}> R$ 5.000,00 </Text>
            <Text style={{ fontWeight:'600'}}> Contato: </Text>
            <Text style={styles.jobDetails}> mauricio.barrows@gmail.com </Text>
          </View>
          <Text>{'\n'}</Text>
          <View style={styles.jobArea}>
            <Text style={styles.jobPosition}> Design de UX </Text>
            <Text style={{ fontWeight:'600'}}> Descrição: </Text>
            <Text style={styles.jobDetails}> Elaborar as interfaces das nossas 
            plataformas (web e mobile). Criar assets para desenvolvimento e 
            validação final. Atuar na prototipação de interfaces, desde wireframes 
            e protótipos navegaveis em alta fidelidade e realizar testes de 
            usabilidade e treinamento do produto. </Text>
            <Text style={{ fontWeight:'600'}}> Salário: </Text>
            <Text style={styles.jobDetails}> R$ 3.510,00 à 7.632,00 </Text>
            <Text style={{ fontWeight:'600'}}> Contato: </Text>
            <Text style={styles.jobDetails}> alphonso.ernser@company.com </Text>
          </View>
          <Text>{'\n'}</Text>
          <View style={styles.jobArea}>
            <Text style={styles.jobPosition}> Web Designer </Text>
            <Text style={{ fontWeight:'600'}}> Descrição: </Text>
            <Text style={styles.jobDetails}> Apoiar no desenvolvimento de sites, 
            hotsites, desenvolvimento de identidade visual de sistemas, atuar na 
            criação de projetos gráficos para web, tratamento de imagem e manutenção 
            de sites. </Text>
            <Text style={{ fontWeight:'600'}}> Salário: </Text>
            <Text style={styles.jobDetails}> R$ 2.000,00 a R$ 3.000,00 </Text>
            <Text style={{ fontWeight:'600'}}> Contato: </Text>
            <Text style={styles.jobDetails}> jerrell_abbott@hotmail.com </Text>
          </View>
          <Text>{'\n'}</Text>
          <View style={styles.jobArea}>
            <Text style={styles.jobPosition}> Desenvolverdor React - Sênior </Text>
            <Text style={{ fontWeight:'600'}}> Descrição: </Text>
            <Text style={styles.jobDetails}> Atuação em projetos Web, participando do desenvolvimento 
            desde os estágios iniciais, com a definição das tarefas junto ao cliente, até a evolução e 
            manutenção da aplicação </Text>
            <Text style={{ fontWeight:'600'}}> Salário: </Text>
            <Text style={styles.jobDetails}> R$ 3.600.00 </Text>
            <Text style={{ fontWeight:'600'}}> Contato: </Text>
            <Text style={styles.jobDetails}> meta_company@gmail.com </Text>
          </View>
          <Text>{'\n'}</Text>
          <View style={styles.jobArea}>
            <Text style={styles.jobPosition}> Analista de Sistemas Web - Sênior </Text>
            <Text style={{ fontWeight:'600'}}> Descrição: </Text>
            <Text style={styles.jobDetails}> Experiência com APIs Web/Integração. Preparação 
            de ambientes para atendimentos de novas demandas. Implantação de correções, melhorias 
            de projetos nos ambientes. Acompanhamento do comportamento do ambiente após as mudanças.
            Atender demandas de preparação de ambientes para novos projetos. Atender demandas de 
            otimização de processos existentes. Realizar documentação dos ambientes. Conhecimento em 
            Weblogic, ELK, DynaTrace, Apache, APIGEE e Rancher. </Text>
            <Text style={{ fontWeight:'600'}}> Salário: </Text>
            <Text style={styles.jobDetails}> R$ 6.420.00 </Text>
            <Text style={{ fontWeight:'600'}}> Contato: </Text>
            <Text style={styles.jobDetails}> krista.effertz@gmail.com </Text>
          </View>
          <Text>{'\n'}</Text>
          <View style={styles.jobArea}>
            <Text style={styles.jobPosition}> Mulheres na Tecnologia - Engenharia de Software </Text>
            <Text style={{ fontWeight:'600'}}> Descrição: </Text>
            <Text style={styles.jobDetails}> Atuar em times ágeis e multidisciplinares com Engenharia e 
            desenvolvimento de aplicações BackEnd e FrontEnd. Estudar tendências de mercado de tecnologia 
            e contribuir com insights para evolução do negócio. Garantir elasticidade e escalabilidade na 
            construção de sotfware. Participar de todo o ciclo das aplicações desde a concepção a construção; </Text>
            <Text style={{ fontWeight:'600'}}> Salário: </Text>
            <Text style={styles.jobDetails}> R$ 12.160.00 </Text>
            <Text style={{ fontWeight:'600'}}> Contato: </Text>
            <Text style={styles.jobDetails}> karolann_turcotte@hotmail.com </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainTitle: {
    fontWeight: '700',
    fontSize: 38,
    color: '#0000b1',
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom: 15,
  },
  jobArea: {
    width: 300,
    padding: 10,
    borderColor: '#000',
    borderStyles: 'solid',
    borderRadius: 4,
    borderWidth: 0.2
  },
  jobPosition: {
    fontSize: 17,
    fontStyle: 'italic',
    color: '#4d4dff'
  },
  jobDetails: {
    fontSize: 12
  }
});

export default App;