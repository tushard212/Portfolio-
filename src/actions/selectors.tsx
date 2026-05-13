import { IAchievement, IDataState, IProject } from '../types/interfaces';

export function getProject(state: IDataState, projectRoute: string): IProject {
    let project: IProject = {
        projectRoute: "",
        imageUrlList: [],
        projectTitle: "",
        projectPeriod: "",
        tags: [],
        builtWith: [],
        projectLink: "",
        descripList: []
    }
    state.projects.forEach((val) => {
        if (val.projectRoute === projectRoute) {
            project = val;
        }
    })
    return project;
}

export function getAchievement(state: IDataState, achievementRoute: string): IAchievement {
    let found = false;
    let achievement: IAchievement = {
        achievementRoute: "",
        issueDate: "",
        title: "",
        issuedBy: "",
        descripList: []
    }
    state.achievements.awards.forEach((val) => {
        if (val.achievementRoute === achievementRoute) {
            found = true;
            achievement = val;
        }

    })
    if (!found) {
        state.achievements.awards.forEach((val) => {
            if (val.achievementRoute === achievementRoute) {
                achievement = val;
            }
        })
    }
    return achievement;
}
