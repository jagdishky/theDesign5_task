import NavigationService from "../NavigationService";

//NAVIGATION FUNCTIONS
export const navigate = (routeName: string, params?: Record<string, any>) => {
    NavigationService.navigate(routeName, params)
}
export const goBack = () => {
    NavigationService.back()
}