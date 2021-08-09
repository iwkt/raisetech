const cardData = {
  data() {
    return {
      items: [
        {
          id: 1,
          iconUrl: 'fas fa-dumbbell',
          title: '現場主義',
          description: '「プログラム」だけでは稼げない！ 現場で求められる「技術」のみ教えます。'
        },
        {
          id: 2,
          iconUrl: 'c-card__icon fas fa-chart-line',
          title: '現役講師',
          description: '「今、求められている技術」をリアルタイムに教えてくれる、現役の技術者だけが講師です。'
        },
        {
          id: 3,
          iconUrl: 'c-card__icon fas fa-cubes',
          title: '徹底サポート',
          description: '期間中の質疑応答無制限！ 個別進捗管理！ 挫折させないサポートを徹底します。'
        }
      ],
    }
  },
}

const appCard = Vue.createApp(cardData)
appCard.mount('#appCard')