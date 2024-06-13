export const koeffsArr = [
  {
    label: "k1",
    desc: "Наличие застройки территории. На данную статью расходов при проектировании и строительстве автомобильных дорог может закладываться от 5 до 10 процентов бюджета проекта. Проведение строительных работ в стеснённых городских условиях оказывает влияние на стоимость работ по возведению дорожного полотна в связи с затратами на организацию дорожного движения, осуществления необходимых технологических перерывов и тд.",
    id: "k1",
    defaultValue: 7.5,
    min: 5,
    max: 10,
  },
  {
    label: "k2",
    desc: "Стоимость возмещения расходов при выкупе земель и выплаты компенсаций. Данная статья расходов так же скорее больше применима к строительству новых дорог регионального уровня, в случае если проектно она проходит вблизи населённых пунктов или иной частной собственности. В среднем на выкуп может закладываться от 5 до 20 процентов бюджета. Когда речь заходит о строительстве и проектировании дороги лесной — данными затратами можно пренебречь, хотя могут быть и частные случаи.",
    id: "Стоимость",
    defaultValue: 12.5,
    min: 5,
    max: 20,
  },
  {
    label: "k3",
    desc: "Количество и тип пересекаемых и переустраиваемых коммуникаций. Говоря про строительство лесной дороги так же можно пренебречь и этой статьёй расходов. Такого количества коммуникаций, как например в городской среде, в лесной среде мы не встретим, если и встретим вовсе. Эта статья расходов может варьироваться от 3 процентов при незначительных вложениях в обновление какого-либо участка сети и до 20 процентов, в случае капитального переустройства сетей большой протяжённости.",
    id: "k2",
    defaultValue: 11.5,
    min: 3,
    max: 20,
  },
  {
    label: "k4",
    desc: "Количество пересечений и примыканий, искусственных сооружений так же влияет на возрастание стоимости строительства. Варьируется в среднем в пределах от 3 до 10 процентов. В случае с дорогами лесными — пересечениями и примыканиями можно пренебрегать при расчёте стоимости, так как у таких дорог обычно не имеется пересечений с другими дорогами или же мест примыкания к различным инженерным сооружениям.",
    id: "k4",
    defaultValue: 6.5,
    min: 3,
    max: 10,
  },
  {
    label: "k5",
    desc: "Количество и размеры дорожных знаков, тип их установки. Дорожные знаки и работы по их установке составляют от 1 до 5 процентов сметной стоимости. На лесных дорогах эту статью расходов можно либо исключить ввиду отсутствия знаков вовсе, либо свести к минимум",
    id: "k5",
    defaultValue: 3,
    min: 1,
    max: 5,
  },
  // {
  // label: "k6",
  //   desc: "Капитальность конструкции дорожной одежды оказывает определяющее влияние на стоимость строительства",
  //   id: "Капитальность",
  //   defaultValue: 47,
  //   min: 47,
  //   max: 47,
  // },
]

export const STRIP_COST = 27082000
// export const STRIP_COST = 1

export const layersData = {
  zero: 0.47,
  one: 0.25,
  two: 0,
}

export const layersArr = [
  {
    label: "0 слоев",
    value: "zero",
  },
  {
    label: "1 слой",
    value: "one",
  },
  {
    label: "2 слоя",
    value: "two",
  },
]

export const kefDesc6 = `Капитальность конструкции дорожной одежды оказывает определяющее влияние на стоимость строительства. Наличие или отсутствие асфальтобетонных слоёв, а так же их количество в пироге дорожной одежды может значительно снизить или увеличить стоимость проекта по строительству автомобильной дороги. Опираясь на стандартную конструкцию дорожной одежды для четвёртой категории автомобильных дорог (два слоя покрытия, основание) в сравнении с дорожной одежды пятой категории, которая зачастую лишена асфальтобетонных слоёв, можно утверждать, что стоимость каждого асфальтобетонного слоя составляет порядка 20-25 процентов от общей стоимости.
(Можно сводную таблицу пихнуть после этих пунктов)
Проектируемая программа для расчёта стоимости лесной дороги будет основываться на стоимости четвёртой категории автомобильной дороги (первая категория лесной). Данный выбор основывается на перспективе использования реализованных проектов строительства в дальнейшем для гражданского пользования в качестве транспортной связи.
Корректировка стоимости будет произведена согласно вышеизложенных факторов, влияющих на стоимость проектов по реализации объектов дорожного строительства. При расчёте стоимости будет возможность исключать пункты из перечня, что будет отображаться на конечной стоимости проекта.`
