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
