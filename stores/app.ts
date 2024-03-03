import type { Data } from '~/interfaces/int'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { createClient } from '@supabase/supabase-js'

const appStore = defineStore('app', () => {
  const supabase = createClient(
    'https://dblmoqabperngqprlrjw.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRibG1vcWFicGVybmdxcHJscmp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkwMTA3NzAsImV4cCI6MjAyNDU4Njc3MH0.YdYbtgmpXMxTfzpJkN6353d781hQ-e6pId8OdWe8Kjo'
  )
  const breakpoints = useBreakpoints(breakpointsTailwind)
  const if_sm = breakpoints.smaller('lg')
  const showNav = ref(false)
  const ifShowNav = ref(false)
  const open_nav = ref(false)
  const opened = ref(true)
  const footer_open = ref(false)
  const if_contact = ref(false)
  const if_loading = ref(true)
  const if_pass = ref(false)
  const appData = ref<Data>()
  const { $gsap: gsap } = useNuxtApp()
  const serv_toggle = ref(false)
  const news_toggle = ref(false)

  async function getAppData() {
    try {
      const { data: dataz, error } = await supabase
        .from('eagleeyespc')
        .select('data')
        .single()
      if (error) throw error
      return dataz.data
    } catch (error) {
      console.log(error)
    }
  }

  const dataz = ref<Data>({
    email: ['eagleeyespc@gmail.com'],
    address: [
      {
        addr: [
          'Ghana, Accra:',
          'L3 COASTAL ESTATES',
          'SK DTD 4040',
          'SK DTD 4040',
        ],
      },
      {
        addr: [
          'Germany, Bremen:',
          'Appartement Nr. 9003',
          'LUISENTAL 29F',
          '28359',
          'BREMEN',
          'GERMANY',
        ],
      },
    ],
    phone: ['+491745969531', '+4915216434754', '+233537804885'],
    socials: {
      facebook:
        'https://www.facebook.com/profile.php?id=61556099897439&mibextid=PtKPJ9',
      twitter: 'https://twitter.com/EagleEyeSpC',
      instagram:
        'https://www.instagram.com/eagleeye_sports_consults?igsh=cWl0aTM0bGJicXZt&utm_source=qr',
      youtube:
        'https://youtube.com/@EagleEyeSportsConsults?si=pTw90oZicIL3Mow_',
    },
    routes: {
      home: {
        vid_src: '',
        title: 'EagleEye Sports Consults',
        slogan: 'Your Pathway to Sporting Greatness',
        opening: {
          opener:
            'EagleEye strives to identify and sign gifted athletes and expand its networks by thinking out of the box. Our goal is to give value to professional sports organizations by utilizing our global network and a contemporary approach to the beautiful game.In order to enhance player value, we run a cutting- edge sports consultancy and agency on behalf of teams and athletes.',
          src: 'https://live.staticflickr.com/65535/53534456724_916713d4ee_o.jpg',
          mission_statement:
            'To empower athletes, sports organizations and businesses in the sports industry to achieve their full potential. Our dedication to the excellence, integrity and client- centric approach ensures that we deliver tailored strategies and actionable insights to maximum performance, enhance competitiveness and unlock new opportunities for our clients.',
        },
        services: {
          left: {
            src: 'https://live.staticflickr.com/65535/53534559030_5edc6a41d8_o.jpg',
          },
          right: {
            serv: [
              {
                title: 'Athlete Representation',
                content:
                  "On behalf of our athletes, our agents are in charge of negotiating professional activities and contracts. In addition, they handle correspondence between athletes and professional teams, the media, and brands or companies who are interested in them. The experience of our agents is essential because it enables them to select the leagues and teams that will best support our athletes' professional growth in light of their expertise, market knowledge, and analytical abilities.",
                src: 'https://live.staticflickr.com/65535/53539752002_f67e871aa2_o.jpg',
              },
              {
                title: 'Sports Marketing & Events Management',
                content:
                  "The portfolio serves as an athlete's entry ticket into the professional ranks. We watch over them and give them presentation and communication tips. Together, our clients and our team build their own electronic portfolios, complete with a highlight reel and an in-depth athlete bio. These are invaluable resources that help us provide exceptional service, build our clients' brands, and raise their market value.",
                src: 'https://live.staticflickr.com/65535/53541058040_442c708e6f_o.png',
              },
              {
                title: 'Legal and Sports Consulting',
                content:
                  'We assist our customers in adjusting to and overcoming the challenges of being a professional athlete by offering career counselling services. Through career plan development and goal-setting, our counselling sessions help our clients maximize their earning potential and achieve their career objectives.',
                src: 'https://live.staticflickr.com/65535/53534559105_6615114621_o.jpg',
              },
              {
                title: 'Talent Scouting',
                content:
                  'By working with different sports leagues and academies, we try to find athletes that have the potential to advance in their careers. Our goal is to expand and enhance our scouting network by means of club outreach, age-appropriate identification, and easily available and thorough education.',
                src: 'https://live.staticflickr.com/65535/53534142181_6ba44e0de9_o.jpg',
              },
              {
                title: 'Athlete Management & Career Development',
                content:
                  'Even when the contract is signed, our job is not concluded. We continue to oversee our athletes and make sure their needs are met at their individual clubs. In addition to providing emotional support during the frequently demanding football seasons, we also offer financial, branding, and PR consultancy services.',
                src: 'https://live.staticflickr.com/65535/53541058030_35f8cf5417_o.jpg',
              },
            ],
          },
        },
        news: [
          {
            date: '16/01/2024',
            src: '/news1.jpg',
            headline:
              'English Premier League clubs eyeing Ghana midfielder Abdul Salis Samed',
            content:
              "Following his exceptional results in the French Ligue 1 with RC Lens since joining them in 2022 from Clermont Foot, Black Stars midfielder Abdul Salis Samed has drawn interest from multiple English Premier League clubs. The 23-year-old defensive midfielder has drawn interest from teams like Brighton, Wolves, and Fulham due to his significant contribution to Lens' midfield. Since Samed has a long-term deal with RC Lenses that runs until 2028, any possible transfer would need a large financial outlay from English clubs. How the prospective deal plays out will be largely dependent on Lens and the EPL teams' negotiations as well as the player's desire to move. Samed, a 2021 graduate of the JMG Academy, has developed quickly over the past few seasons to be among the top defensive midfielders in Ligue 1. Prior to joining Lens, he was a regular player for Clermont Foot, where he helped the team qualify for European football by coming second to PSG in the previous year. In addition, Samed competed for Ghana in the 2022 World Cup and the just finished 2023 AFCON.",
          },
          {
            date: '22/01/2024',
            src: '/news3.jpg',
            headline:
              "Semenyo scores impressive goal in Bournemouth's 2-2 draw at Newcastle",
            content:
              "Antoine Semenyo, a Ghanaian striker, scored a spectacular goal at St James' Park to help Bournemouth and Newcastle United draw 2-2 in their exciting Premier League match. Semenyo found the back of the goal in spectacular fashion thanks to his outstanding display. Bournemouth took the lead when Dominic Solanke broke the deadlock, but Anthony Gordon of Newcastle quickly equalized. Antoine Semenyo's powerful strike gave Bournemouth the lead again but Ritchie, a former player for Bournemouth, dramatically saved a point for Newcastle. Semenyo's heroics notwithstanding, Bournemouth was forced to leave the game with a crucial point.",
          },
          {
            date: '30/01/2024',
            src: '/news2.jpg',
            headline:
              "Ex-president Kufuor backs Kurt Okraku to fix Ghana's football woes",
            content:
              "In an effort to address Ghana's football issues, Kurt Okraku, the president of the Ghana Football Association, has received backing from former president John Agyekum Kufuor. The inability of Kurt Okraku's administration to make an impression at competitions has been a major obstacle. Under the present FA, the Black Stars have never advanced past the group stages in a significant competition. Ghana has been eliminated from two AFCON tournaments and the FIFA World Cup during the group round. But ex-president Kufuor still has faith in Kurt Okraku's leadership, even in the face of pressure. Kufuor gave the GA boss some words of encouragement, saying, 'I know you are embattled sadly because of the Black Stars' non-performance in Cote d'Ivoire. That’s sports for you. You shouldn't underestimate anyone since nowadays, people all around the world are proficient in football or football. You never become comfortable. I’m not blaming you, but since you are the institution's head, it's leadership, so maybe when we complete the whole analysis, but I know you will come out of it.'",
          },
          {
            date: '02/02/2024',
            src: '/news5.jpg',
            headline:
              "Ghana's Sena Agbeko loses world title fight in round 2 to David Morrell Jr",
            content:
              "Sena Agbeko, a boxer from Ghana, lost to Cuban David Morrell Jr. in round two of their WBA Middleweight match on Saturday, December 16 at The Armoury in Minneapolis. It was clear from away that Agbeko was up against a strong foe in Morrell, a Cuban native who delivered a flurry of blows. Regretfully, Agbeko was unable to counter his opponent's punches. At 1:43 of the second round, Morrell's strong blows were too much for Agbeko to handle, and referee Mark Nelson had to step in and end the bout. It was Morrell's ninth knockout in ten fights as he retained his WBA secondary super middleweight title with this commanding victory. The fight changed course when Morrell used his left hand to stun Agbeko, rendering him helpless against a continuous assault of punches. The decision to intervene on behalf of Agbeko by referee Nelson ensured Morrell's victory. Nashville-based Sena Agbeko entered the match with a record of 28 victories, 22 knockouts, and 2 losses. Nevertheless, he suffered his second professional knockout loss, which resulted in his third career loss. After his previous fight in April 2023, in which he had trouble obtaining a licence, Agbeko was defeated. Fans of Agbeko and Ghana were hoping for a victorious comeback, but Morrell's outstanding performance crushed those hopes.",
          },
          {
            date: '14/02/2024',
            src: '/news4.jpg',
            headline:
              'Asante Kotoko beats Nsoatreman 2-1 to win J.A Kufuor Cup',
            content:
              "On Sunday, February 18, 2024, Asante Kotoko defeated Nsoatreman 2-1 in the J.A. Kufuor Cup at the Baba Yara Stadium in Kumasi, coming from behind. The match began with both sides wearing identical yellow strips until the 25th minute, at which point Kotoko paused play to change to a white shirt for easier identification. Before Abdul Rahman broke the tie and gave Nsoatreman the lead in the game, it appeared as though the first half would end in a scoreless draw. Following the break, Steven Mukwala of Uganda was on hand to secure an equaliser for the Porcupine Warriors, which happened in the 57th minute when Asante Kotoko went in pursuit of one. Nsoatreman was given another opportunity to score a penalty in the game. Frederick Asare, nevertheless, saved Manaf Umar's penalty kick. With a goal in the 67th minute, Peter Amidu of Kotoko completed the victory after receiving a perfectly timed ball from Richmond Lamptey. The JAK Foundation arranged the game in remembrance of former Ghanaian President John Agyekum Kufuor, who led the country for two years between 2000 and 2008.",
          },
        ],
      },
      about: {
        _src: 'https://live.staticflickr.com/65535/53534320538_e5d81e3fc7_o.jpg',
        title: 'ABOUT US',
        about_txt:
          'In February 2024, EagleEye Sports Consults was founded as a company that represents athletes and provides them with comprehensive management.Our goal is to help athletes achieve their personal and athletic goals by designing their professional careers.Additionally, we provide our clients with a staff of professionals who are available around- the - clock, allowing them to concentrate just on the ball.Our services include: Sports Marketing & Events Management, Talent Scouting, Athlete Management & Career Development, Legal & Sports Consulting, Athlete Representation.',
        mission:
          'To empower athletes, sports organizations and businesses in the sports industry to achieve their full potential. Our dedication to the excellence, integrity and client- centric approach ensures that we deliver tailored strategies and actionable insights to maximum performance, enhance competitiveness and unlock new opportunities for our clients.',
        vision:
          "To rise to the position of premier industry leader as a result of the sports community's increasing demand for representation.",
        img_src:
          'https://live.staticflickr.com/65535/53533251352_6f151bfcf1_o.jpg',
        stats: [12, 24, 60, 2024],
        team_desc:
          "Meet the faces of EagleEye Sports Consults' corporate executive group, providing leadership to our teams and events around the world.",
        team_src: [
          {
            name: 'NANA A. K. LARBI',
            pos: 'Co-Founder / Player Agent',
            src: 'https://live.staticflickr.com/65535/53541056275_bd04f734bd_o.jpg',
          },
          {
            name: 'MORRISON AKOWUAH',
            pos: 'Co-Founder / Player Agent',
            src: 'https://live.staticflickr.com/65535/53540633426_f94b2cc16c_o.jpg',
          },
          {
            name: 'RANSFORD LARBI',
            pos: 'Head of Operations',
            src: 'https://live.staticflickr.com/65535/53540812068_63943e2af1_o.jpg',
          },
          {
            name: 'YAW OWUSU BANAHENE',
            pos: 'Chief Scout (Ghana)',
            src: 'https://live.staticflickr.com/65535/53540959629_ecaa9285ac_o.jpg',
          },
          {
            name: 'CHURCHILL CARLOS MASHETI',
            pos: 'Scout (Kenya)',
            src: 'https://live.staticflickr.com/65535/53541056280_c9558276c5_o.jpg',
          },
        ],
      },
      athletes: {
        _src: '',
        title: '',
        athl_txt: '',
        athl_src: [
          {
            name: 'Michael Ofori',
            src: '',
          },
          {
            name: 'Samuel Lartey',
            src: '',
          },
          {
            name: 'Christopher Okonkwo',
            src: '',
          },
          {
            name: 'Abubakar Sadick',
            src: '',
          },
        ],
      },
      messages: [],
    },
  })

  const toggleContact = (bool?: boolean) => {
    if (bool) {
      if (if_sm.value) {
        return gsap.to('#contact', {
          height: '750px',
          duration: 0.5,
          ease: 'power4.out',
        })
      } else {
        return gsap.to('#contact', {
          height: '450px',
          duration: 0.5,
          ease: 'power4.out',
        })
      }
    } else {
      if_contact.value = !if_contact.value
      if (if_contact.value) {
        if (if_sm) {
          gsap.to('#contact', {
            height: '750px',
            duration: 0.5,
            ease: 'power4.out',
          })
        } else {
          gsap.to('#contact', {
            height: '450px',
            duration: 0.5,
            ease: 'power4.out',
          })
        }
      } else {
        gsap.to('#contact', {
          height: '100px',
          duration: 0.5,
          ease: 'power4.out',
        })
      }
    }
  }

  return {
    showNav,
    ifShowNav,
    open_nav,
    opened,
    footer_open,
    if_contact,
    toggleContact,
    if_loading,
    data: appData,
    getAppData,
    if_pass,
    serv_toggle,
    news_toggle,
  }
})

export default appStore
