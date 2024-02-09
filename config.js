/*
 * https://gitgud.io/ahsk/clewd
 * https://github.com/h-a-s-k/clewd
 */

// SET YOUR COOKIE BELOW

module.exports = {
  Cookie:
    "sessionKey=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",
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
