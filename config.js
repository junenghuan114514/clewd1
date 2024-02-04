/*
 * https://gitgud.io/ahsk/clewd
 * https://github.com/h-a-s-k/clewd
 */

// SET YOUR COOKIE BELOW

module.exports = {
  Cookie:
    "sessionKey=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,sessionKey=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",
  Ip: "127.0.0.1",
  Port: 8444,
  BufferSize: 8,
  SystemInterval: 3,
  PromptExperimentFirst: "",
  PromptExperimentNext: "",
  PersonalityFormat: "{{char}}'s personality: {{personality}}",
  ScenarioFormat: "Dialogue scenario: {{scenario}}",
  Settings: {
    RenewAlways: true,
    RetryRegenerate: false,
    PromptExperiments: true,
    SystemExperiments: true,
    PreventImperson: false,
    AllSamples: false,
    NoSamples: false,
    StripAssistant: false,
    StripHuman: false,
    PassParams: false,
    ClearFlags: false,
    PreserveChats: false,
    LogMessages: false,
    Superfetch: true,
  },
};

/*
 BufferSize
 * How many characters will be buffered before the AI types once
 * lower = less chance of `PreventImperson` working properly

 ---

 SystemInterval
 * How many messages until `SystemExperiments alternates`

 ---

 Other settings
 * https://gitgud.io/ahsk/clewd/#defaults
 * and
 * https://gitgud.io/ahsk/clewd/-/blob/master/CHANGELOG.md
 */
