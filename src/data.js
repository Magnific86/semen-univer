export const koeffsArr = [
  {
    label: "k1",
    desc: "Наличие застройки территории",
    id: "Наличие",
    defaultValue: 7.5,
    min: 5,
    max: 10,
  },
  {
    label: "k2",
    desc: "Стоимость возмещения расходов при выкупе земель и выплаты компенсаций",
    id: "Стоимость",
    defaultValue: 12.5,
    min: 5,
    max: 20,
  },
  {
    label: "k3",
    desc: "Количество и тип пересекаемых и переустраиваемых коммуникаций",
    id: "Количество",
    defaultValue: 11.5,
    min: 3,
    max: 20,
  },
  {
    label: "k4",
    desc: "Количество пересечений и примыканий, искусственных сооружений так же влияет на возрастание стоимости строительства",
    id: "Количество пересечений",
    defaultValue: 6.5,
    min: 3,
    max: 10,
  },
  {
    label: "k5",
    desc: "Количество и размеры дорожных знаков, тип их установки",
    id: "Количество и размеры",
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

// export const STRIP_COST = 27082000
export const STRIP_COST = 1

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
