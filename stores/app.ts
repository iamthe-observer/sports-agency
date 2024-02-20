const appStore = defineStore('app', () => {
  const showNav = ref(false)
  const ifShowNav = ref(false)
  const open_nav = ref(false)
  const opened = ref(true)
  const footer_open = ref(false)
  const if_contact = ref(false)
  const { $gsap: gsap } = useNuxtApp()

  const news_data = ref([
    {
      src: '/stuff.jpg',
      headline:
        'English Premier League clubs eyeing Ghana midfielder Abdul Salis Samed',
      content:
        "Following his exceptional results in the French Ligue 1 with RC Lens since joining them in 2022 from Clermont Foot, Black Stars midfielder Abdul Salis Samed has drawn interest from multiple English Premier League clubs. The 23-year-old defensive midfielder has drawn interest from teams like Brighton, Wolves, and Fulham due to his significant contribution to Lens' midfield. Since Samed has a long-term deal with RC Lenses that runs until 2028, any possible transfer would need a large financial outlay from English clubs. How the prospective deal plays out will be largely dependent on Lens and the EPL teams' negotiations as well as the player's desire to move. Samed, a 2021 graduate of the JMG Academy, has developed quickly over the past few seasons to be among the top defensive midfielders in Ligue 1. Prior to joining Lens, he was a regular player for Clermont Foot, where he helped the team qualify for European football by coming second to PSG in the previous year. In addition, Samed competed for Ghana in the 2022 World Cup and the just finished 2023 AFCON.",
    },
    {
      src: '',
      headline:
        "Semenyo scores impressive goal in Bournemouth's 2-2 draw at Newcastle",
      content:
        "Antoine Semenyo, a Ghanaian striker, scored a spectacular goal at St James' Park to help Bournemouth and Newcastle United draw 2-2 in their exciting Premier League match. Semenyo found the back of the goal in spectacular fashion thanks to his outstanding display. Bournemouth took the lead when Dominic Solanke broke the deadlock, but Anthony Gordon of Newcastle quickly equalized. Antoine Semenyo's powerful strike gave Bournemouth the lead again but Ritchie, a former player for Bournemouth, dramatically saved a point for Newcastle. Semenyo's heroics notwithstanding, Bournemouth was forced to leave the game with a crucial point.",
    },
    {
      src: '',
      headline:
        "Ex-president Kufuor backs Kurt Okraku to fix Ghana's football woes",
      content:
        "In an effort to address Ghana's football issues, Kurt Okraku, the president of the Ghana Football Association, has received backing from former president John Agyekum Kufuor. The inability of Kurt Okraku's administration to make an impression at competitions has been a major obstacle. Under the present FA, the Black Stars have never advanced past the group stages in a significant competition. Ghana has been eliminated from two AFCON tournaments and the FIFA World Cup during the group round. But ex-president Kufuor still has faith in Kurt Okraku's leadership, even in the face of pressure. Kufuor gave the GA boss some words of encouragement, saying, 'I know you are embattled sadly because of the Black Stars' non-performance in Cote d'Ivoire. That’s sports for you. You shouldn't underestimate anyone since nowadays, people all around the world are proficient in football or football. You never become comfortable. I’m not blaming you, but since you are the institution's head, it's leadership, so maybe when we complete the whole analysis, but I know you will come out of it.'",
    },
    {
      src: '',
      headline:
        "Ghana's Sena Agbeko loses world title fight in round 2 to David Morrell Jr",
      content:
        "Sena Agbeko, a boxer from Ghana, lost to Cuban David Morrell Jr. in round two of their WBA Middleweight match on Saturday, December 16 at The Armoury in Minneapolis. It was clear from away that Agbeko was up against a strong foe in Morrell, a Cuban native who delivered a flurry of blows. Regretfully, Agbeko was unable to counter his opponent's punches. At 1:43 of the second round, Morrell's strong blows were too much for Agbeko to handle, and referee Mark Nelson had to step in and end the bout. It was Morrell's ninth knockout in ten fights as he retained his WBA secondary super middleweight title with this commanding victory. The fight changed course when Morrell used his left hand to stun Agbeko, rendering him helpless against a continuous assault of punches. The decision to intervene on behalf of Agbeko by referee Nelson ensured Morrell's victory. Nashville-based Sena Agbeko entered the match with a record of 28 victories, 22 knockouts, and 2 losses. Nevertheless, he suffered his second professional knockout loss, which resulted in his third career loss. After his previous fight in April 2023, in which he had trouble obtaining a licence, Agbeko was defeated. Fans of Agbeko and Ghana were hoping for a victorious comeback, but Morrell's outstanding performance crushed those hopes.",
    },
    {
      src: '',
      headline: 'Asante Kotoko beats Nsoatreman 2-1 to win J.A Kufuor Cup',
      content:
        "On Sunday, February 18, 2024, Asante Kotoko defeated Nsoatreman 2-1 in the J.A. Kufuor Cup at the Baba Yara Stadium in Kumasi, coming from behind. The match began with both sides wearing identical yellow strips until the 25th minute, at which point Kotoko paused play to change to a white shirt for easier identification. Before Abdul Rahman broke the tie and gave Nsoatreman the lead in the game, it appeared as though the first half would end in a scoreless draw. Following the break, Steven Mukwala of Uganda was on hand to secure an equaliser for the Porcupine Warriors, which happened in the 57th minute when Asante Kotoko went in pursuit of one. Nsoatreman was given another opportunity to score a penalty in the game. Frederick Asare, nevertheless, saved Manaf Umar's penalty kick. With a goal in the 67th minute, Peter Amidu of Kotoko completed the victory after receiving a perfectly timed ball from Richmond Lamptey. The JAK Foundation arranged the game in remembrance of former Ghanaian President John Agyekum Kufuor, who led the country for two years between 2000 and 2008.",
    },
  ])

  const toggleContact = (bool?: boolean) => {
    if (bool) {
      return gsap.to('#contact', {
        height: '450px',
        duration: 0.5,
        ease: 'power4.out',
      })
    } else {
      if_contact.value = !if_contact.value
      if (if_contact.value) {
        gsap.to('#contact', {
          height: '450px',
          duration: 0.5,
          ease: 'power4.out',
        })
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
    news_data,
    if_contact,
    toggleContact,
  }
})

export default appStore
