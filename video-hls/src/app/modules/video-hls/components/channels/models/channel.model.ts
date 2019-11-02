export interface channels{
        name: string,
        web: string,
        logo: string,
        resolution: string,
        epg_id: string,
        options: channelsOptions[],
        extra_info: string[]   
}
export interface channelsOptions{
    format: string,
    url: string,
    extra_info: string[]
}