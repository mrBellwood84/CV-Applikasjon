 /** Interface for CV objekter */
export interface ICv
{
    job: {
        title:string,
        jobs: ICvJobItem[];
    },
    education: {
        title:string,
        educations: ICvEductationItem[]
    },
    otherItems: {
        title:string,
        other: ICvOther[]
    },
    references: {
        title:string,
        references: ICvReference[]
    }
}

/** Interface for Cv arbeidserfaring  */
export interface ICvJobItem
{
    employer: string;
    yearSpan: string;
    comment?: string;
}

/** Interface for Cv utdanning */
export interface ICvEductationItem
{
    yearSpan: string;
    school: string;
    course: string;
    comment?: string;
}

/** Interface for Cv annet */
export interface ICvOther 
{
    item: string;
}

/** Interface for Cv referanser */
export interface ICvReference
{
    name: string;
    title: string;
    phonenumber: string;
    email?: string;
}