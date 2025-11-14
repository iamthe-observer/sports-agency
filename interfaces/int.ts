export interface Data {
  email: string
  phone: string[]
  address: {
    addr: string[]
  }[]
  socials: {
    facebook: string
    twitter: string
    instagram: string
    youtube: string
  }
  routes: {
    home: {
      vid_src?: string
      title: string
      slogan: string
      opening: {
        opener: string
        src?: string
        mission_statement: string
      }
      services: {
        left: { src: string }
        right: {
          serv: {
            title: string
            content: string
            src?: string
          }[]
        }
      }
      news: {
        headline: string
        content: string
        date: string
        src?: string
      }[]
    }

    about: {
      _src?: string
      title: string
      about_txt: string
      mission: string
      vision: string
      img_src?: string
      stats: number[]
      team_desc: string
      team_src?: {
        name: string
        src: string
        pos: string
      }[]
    }

    athletes: {
      _src?: string
      title: string
      athl_txt: string
      athl_src?: {
        name: string
        src: string
      }[]
    }

    messages: {
      name: string
      msg: string
      date: string
    }[]
  }
}

export interface Src {
  routes: {
    home: {
      vid_src?: string
      opening: {
        src?: string
      }
      services: {
        left: { src: string }
        right: {
          serv: {
            src?: string
          }[]
        }
      }
      news: {
        src?: string
      }[]
    }

    about: {
      _src?: string
      img_src?: string
      team_src?: {
        src: string
      }[]
    }

    athletes: {
      _src?: string
      athl_src?: {
        src: string
      }[]
    }
  }
}

export interface LangData {
  Loading: string
  intro_head: string
  mission_head: string
  services_head: string
  news_head: string
  news_text: string[]
  headline: string[]
  news_button: string[]
  links: string[]
  contact_head: string
  contact_text: string
  send: string
}
