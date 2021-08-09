const menudata = {
  data(){
    return {
      navItems: [
        {
          id:1,
          title:'はじめての方へ',
          subTitle: [
            {
              subsubtitle:'マンガでわかるRaiseTech',
              url: '#',
            },
            {
              subsubtitle:'サポート体制',
              url: '#',
            },
            {
              subsubtitle:'トライアル受講',
              url: '#',
            },
            {
              subsubtitle:'就職・転職支援制度',
              url: '#',
            },
            {
              subsubtitle:'ご利用の流れ',
              url: '#',
            },
          ]
        },
        {
          id: 2,
          title: 'コース案内',
          subTitle: [
            {
              subsubtitle:'マーケティングコース',
              url: 'https://miku-nosuke.com',
            },
            {
              subsubtitle:'デザインコース',
              url: 'https://miku-nosuke.com',
            },
            {
              subsubtitle:'WordPress副業コース',
              url: 'https://miku-nosuke.com',
            },
            {
              subsubtitle:'AWSフルコース',
              url: 'https://miku-nosuke.com',
            },
            {
              subsubtitle:'AWS自動化コース',
              url: 'https://miku-nosuke.com',
            },
            {
              subsubtitle:'Javaフルコース',
              url: 'https://miku-nosuke.com',
            },
            {
              subsubtitle:'Javaフレームワークコース',
              url: 'https://miku-nosuke.com',
            },
          ]
        },
        {
          id: 3,
          title: '講師紹介',
        }
        ,
        {
          id: 4,
          title: '卒業生の声・実績',
          subTitle: [
            {
              subsubtitle: '卒業生の声',
              url: 'https://miku-nosuke.com',
            },
            {
              subsubtitle: '転職・案件実績',
              url: 'https://miku-nosuke.com',
            },
          ]
        }
        ,
        {
          id: 5,
          title: 'メディア',
          subTitle: [
            {
              subsubtitle: '動画一覧',
              url: 'https://miku-nosuke.com',
            },
            {
              subsubtitle: '掲載記事一覧',
              url: 'https://miku-nosuke.com',
            },
          ]
        }
        ,
        {
          id: 6,
          title: 'サポート',
          subTitle: [
            {
              subsubtitle: 'よくあるご質問',
              url: 'https://miku-nosuke.com',
            },
            {
              subsubtitle: 'お問い合わせ',
              url: 'https://miku-nosuke.com',
            }
          ]
        }
        ,
        {
          id: 7,
          title: '受講お申し込み',
          cssClass: 'p-button--contact c-button--mint'
        }
        ,
      ],
    }
  }
}

const menu = Vue.createApp(menudata)
menu.mount('#menu') 