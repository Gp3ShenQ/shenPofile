import { defineStore } from 'pinia'

type DetailsArray = {
  name: string
  slug: string
  description: string
}

type Resume = {
  content: {
    rendered: string
  }
}

type TopHeaderImage = {
  guid: {
    rendered: string
  }
}

export const useCommonStore = defineStore('commonStore', {
  state: () => ({
    topHeaderImage: [] as string[],
    allAvatarDetails: [] as DetailsArray[],
    avatarBackground: [] as string[],
    resume: [] as Resume[],
    githubIcon: '' as string,
    topHeaderStatus: 'aboutMe' as string,
  }),
})