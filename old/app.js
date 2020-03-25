<StatusBar hidden />
<ViewLogo>
  <ImageLogo source={require('../../../assets/corona.png')} />
</ViewLogo>
<ViewTitle>
  <TextTitle>COVID-19</TextTitle>
  <TextSubTitle>
    Status atual da contaminação do vírus no Brasil{' '}
  </TextSubTitle>
</ViewTitle>

<ViewCard>
  <Card1>
    <CardText>{this.state.casos}</CardText>
    <CardTitle>Casos</CardTitle>
  </Card1>
  <Card2>
    <CardText>{this.state.confirmados}</CardText>
    <CardTitle>Confirmados</CardTitle>
  </Card2>
</ViewCard>
<ViewCard2>
  <Card3>
    <CardText>{this.state.mortes}</CardText>
    <CardTitle>Mortes</CardTitle>
  </Card3>
  <Card4>
    <CardText>{this.state.recuperados}</CardText>
    <CardTitle>Curados</CardTitle>
  </Card4>
</ViewCard2>

<ViewSelected>
  <TextSelect> Selecione um Estado </TextSelect>
  <Select2
    isSelectSingle
    style={{borderRadius: 1}}
    colorTheme={'grey'}
    popupTitle="Estados"
    title="Selecione seu Estado"
    data={mockData}
    onSelect={data => {
      this.setState({data});
    }}
    onRemoveItem={data => {
      this.setState({data});
    }}
  />
</ViewSelected>
<ViewButtonSearch>
  <ButtonSearch onPress={() => this._error()}>
    <ButtonText> PESQUISAR </ButtonText>
  </ButtonSearch>
</ViewButtonSearch>
<DateText>Atualizado {this.state.updated_at}</DateText>