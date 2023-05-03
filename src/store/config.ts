const config = {
	namespaced: true,
	state: () => {
		return {
			keyWord: '',
		};
	},
	mutations: {
		setKeyWordMutation(state: any, payload: any){
			state.keyWord = payload;
		}
	},
	actions: {
		setKeyWordAction(context: any, payload: any){
			context.commit("setKeyWordMutation", payload);
		}
	},
};
export default config;
  