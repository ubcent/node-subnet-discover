module.exports = [{
  oid: "1.3.6.1.2.1.33.1.1.1",
  name: "upsIdentManufacturer",
  descr: "The name of the UPS manufacturer"
}, {
  oid: "1.3.6.1.2.1.33.1.1.2",
  name: "upsIdentModel",
  descr: "The UPS Model designation"
}, {
  oid: "1.3.6.1.2.1.33.1.1.3",
  name: "upsIdentUPSSoftwareVersion",
  descr: "The UPS firmware/software version(s)"
}, {
  oid: "1.3.6.1.2.1.33.1.1.4",
  name: "upsIdentAgentSoftwareVersion",
  descr: "The UPS agent software version"
}, {
  oid: "1.3.6.1.2.1.33.1.1.5",
  name: "upsIdentName",
  descr: "A string identifying the UPS"
}, {
  oid: "1.3.6.1.2.1.33.1.1.6",
  name: "upsIdentAttachedDevices",
  descr: "A string identifying the devices attached to the output(s) of the UPS"
}, {
  oid: "1.3.6.1.2.1.33.1.2.1",
  name: "upsBatteryStatus",
  descr: "The indication of the capacity remaining in the UPS systems batteries"
}, {
  oid: "1.3.6.1.2.1.33.1.2.2",
  name: "upsSecondsOnBattery",
  descr: "If the unit is on battery power, the elapsed time since the UPS last switched to battery power"
}, {
  oid: "1.3.6.1.2.1.33.1.2.3",
  name: "upsEstimatedMinutesRemaining",
  descr: "An estimate of the time to battery charge depletion"
}, {
  oid: "1.3.6.1.2.1.33.1.2.4",
  name: "upsEstimatedChargeRemaining",
  descr: "An estimate of the battery charge remaining expressed as a percent of full charge"
}, {
  oid: "1.3.6.1.2.1.33.1.2.5",
  name: "upsBatteryVoltage",
  descr: "The magnitude of the present battery voltage"
}, {
  oid: "1.3.6.1.2.1.33.1.2.6",
  name: "upsBatteryCurrent",
  descr: "The present battery current"
}, {
  oid: "1.3.6.1.2.1.33.1.2.7",
  name: "upsBatteryTemperature",
  descr: "The ambient temperature at or near the UPS Battery casing"
}, {
  oid: "1.3.6.1.2.1.33.1.3.1",
  name: "upsInputLineBads",
  descr: "A count of the number of times the input entered an out-of-tolerance condition as defined by the manufacturer"
}, {
  oid: "1.3.6.1.2.1.33.1.3.2",
  name: "upsInputNumLines",
  descr: "The number of input lines utilized in this device"
}, {
  oid: "1.3.6.1.2.1.33.1.3.3.1.1",
  name: "upsInputLineIndex",
  descr: "The input line identifier"
}, {
  oid: "1.3.6.1.2.1.33.1.3.3.1.2",
  name: "upsInputFrequency",
  descr: "The present input frequency"
}, {
  oid: "1.3.6.1.2.1.33.1.3.3.1.3",
  name: "upsInputVoltage",
  descr: "The magnitude of the present input voltage"
}, {
  oid: "1.3.6.1.2.1.33.1.3.3.1.4",
  name: "upsInputCurrent",
  descr: "The magnitude of the present input current"
}, {
  oid: "1.3.6.1.2.1.33.1.3.3.1.5",
  name: "upsInputTruePower",
  descr: "The magnitude of the present input true power"
}, {
  oid: "1.3.6.1.2.1.33.1.4.1",
  name: "upsOutputSource",
  descr: "The present source of output power"
}, {
  oid: "1.3.6.1.2.1.33.1.4.2",
  name: "upsOutputFrequency",
  descr: "The present output frequency"
}, {
  oid: "1.3.6.1.2.1.33.1.4.3",
  name: "upsOutputNumLines",
  descr: "The number of output lines utilized in this device"
}, {
  oid: "1.3.6.1.2.1.33.1.4.4.1.1",
  name: "upsOutputLineIndex",
  descr: "The output line identifier"
}, {
  oid: "1.3.6.1.2.1.33.1.4.4.1.2",
  name: "upsOutputVoltage",
  descr: "The present output voltage"
}, {
  oid: "1.3.6.1.2.1.33.1.4.4.1.3",
  name: "upsOutputCurrent",
  descr: "The present output current"
}, {
  oid: "1.3.6.1.2.1.33.1.4.4.1.4",
  name: "upsOutputPower",
  descr: "The present output true power"
}, {
  oid: "1.3.6.1.2.1.33.1.4.4.1.5",
  name: "upsOutputPercentLoad",
  descr: "The percentage of the UPS power capacity"
}, {
  oid: "1.3.6.1.2.1.33.1.5.1",
  name: "upsBypassFrequency",
  descr: "The present bypass frequency"
}, {
  oid: "1.3.6.1.2.1.33.1.5.2",
  name: "upsBypassNumLines",
  descr: "The number of bypass lines utilized in this device"
}, {
  oid: "1.3.6.1.2.1.33.1.5.3.1.1",
  name: "upsBypassLineIndex",
  descr: "The bypass line identifier"
}, {
  oid: "1.3.6.1.2.1.33.1.5.3.1.2",
  name: "upsBypassVoltage",
  descr: "The present bypass voltage"
}, {
  oid: "1.3.6.1.2.1.33.1.5.3.1.3",
  name: "upsBypassCurrent",
  descr: "The present bypass current"
}, {
  oid: "1.3.6.1.2.1.33.1.5.3.1.4",
  name: "upsBypassPower",
  descr: "The present true power conveyed by the bypass"
}, {
  oid: "1.3.6.1.2.1.33.1.6.1",
  name: "upsAlarmsPresent",
  descr: "The present number of active alarm conditions"
}, {
  oid: "1.3.6.1.2.1.33.1.6.2.1.1",
  name: "upsAlarmId",
  descr: "A unique identifier for an alarm condition"
}, {
  oid: "1.3.6.1.2.1.33.1.6.2.1.2",
  name: "upsAlarmDescr",
  descr: "A reference to an alarm description object"
}, {
  oid: "1.3.6.1.2.1.33.1.6.2.1.3",
  name: "upsAlarmTime",
  descr: "The value of sysUpTime when the alarm condition was detected"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.1",
  name: "upsAlarmBatteryBad",
  descr: "One or more batteries have been determined to require replacement"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.2",
  name: "upsAlarmOnBattery",
  descr: "The UPS is drawing power from the batteries"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.3",
  name: "upsAlarmLowBattery",
  descr: "The remaining battery run-time is less than or equal to upsConfigLowBattTime"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.4",
  name: "upsAlarmDepletedBattery",
  descr: "The UPS will be unable to sustain the present load when and if the utility power is lost"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.5",
  name: "upsAlarmTempBad",
  descr: "A temperature is out of tolerance"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.6",
  name: "upsAlarmInputBad",
  descr: "An input condition is out of tolerance"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.7",
  name: "upsAlarmOutputBad",
  descr: "An output condition (other than OutputOverload) is out of tolerance"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.8",
  name: "upsAlarmOutputOverload",
  descr: "The output load exceeds the UPS output capacity"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.9",
  name: "upsAlarmOnBypass",
  descr: "The Bypass is presently engaged on the UPS"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.10",
  name: "upsAlarmBypassBad",
  descr: "The Bypass is out of tolerance"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.11",
  name: "upsAlarmOutputOffAsRequested",
  descr: "The UPS has shutdown as requested, i.e., the output is off"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.12",
  name: "upsAlarmUpsOffAsRequested",
  descr: "The entire UPS has shutdown as commanded"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.13",
  name: "upsAlarmChargerFailed",
  descr: "An uncorrected problem has been detected within the UPS charger subsystem"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.14",
  name: "upsAlarmUpsOutputOff",
  descr: "The output of the UPS is in the off state"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.15",
  name: "upsAlarmUpsSystemOff",
  descr: "The UPS system is in the off state"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.16",
  name: "upsAlarmFanFailure",
  descr: "The failure of one or more fans in the UPS has been detected"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.17",
  name: "upsAlarmFuseFailure",
  descr: "The failure of one or more fuses has been detected"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.18",
  name: "upsAlarmGeneralFault",
  descr: "A general fault in the UPS has been detected"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.19",
  name: "upsAlarmDiagnosticTestFailed",
  descr: "The result of the last diagnostic test indicates a failure"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.20",
  name: "upsAlarmCommunicationsLost",
  descr: "A problem has been encountered in the communications between the agent and the UPS"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.21",
  name: "upsAlarmAwaitingPower",
  descr: "The UPS output is off and the UPS is awaiting the return of input power"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.22",
  name: "upsAlarmShutdownPending",
  descr: "A upsShutdownAfterDelay countdown is underway"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.23",
  name: "upsAlarmShutdownImminent",
  descr: "The UPS will turn off power to the load in less than 5 seconds"
}, {
  oid: "1.3.6.1.2.1.33.1.6.3.24",
  name: "upsAlarmTestInProgress",
  descr: "A test is in progress, as initiated and indicated by the Test Group"
}, {
  oid: "1.3.6.1.2.1.33.1.6.4.0",
  name: "upsAlarmID",
  descr: "upsAlarmID "
}, {
  oid: "1.3.6.1.2.1.33.1.6.5.0",
  name: "upsAlarmDESCR",
  descr: "upsAlarmDESCR"
}, {
  oid: "1.3.6.1.2.1.33.1.7.1",
  name: "upsTestId",
  descr: "The test is named by an OBJECT IDENTIFIER which allows a standard mechanism for the initiation of tests"
}, {
  oid: "1.3.6.1.2.1.33.1.7.2",
  name: "upsTestSpinLock",
  descr: "A spin lock on the test subsystem"
}, {
  oid: "1.3.6.1.2.1.33.1.7.3",
  name: "upsTestResultsSummary",
  descr: "The results of the current or last UPS diagnostics test performed"
}, {
  oid: "1.3.6.1.2.1.33.1.7.4",
  name: "upsTestResultsDetail",
  descr: "Additional information about upsTestResultsSummary"
}, {
  oid: "1.3.6.1.2.1.33.1.7.5",
  name: "upsTestStartTime",
  descr: "The value of sysUpTime at the time the test in progress was initiated"
}, {
  oid: "1.3.6.1.2.1.33.1.7.6",
  name: "upsTestElapsedTime",
  descr: "The amount of time, in TimeTicks, since the test in progress was initiated"
}, {
  oid: "1.3.6.1.2.1.33.1.7.7.1",
  name: "upsTestNoTestsInitiated",
  descr: "No tests have been initiated and no test is in progress"
}, {
  oid: "1.3.6.1.2.1.33.1.7.7.2",
  name: "upsTestAbortTestInProgress",
  descr: "The test in progress is to be aborted"
}, {
  oid: "1.3.6.1.2.1.33.1.7.7.3",
  name: "upsTestGeneralSystemsTest",
  descr: "The manufacturers standard test of UPS device systems"
}, {
  oid: "1.3.6.1.2.1.33.1.7.7.4",
  name: "upsTestQuickBatteryTest",
  descr: "A test that is sufficient to determine if the battery needs replacement"
}, {
  oid: "1.3.6.1.2.1.33.1.7.7.5",
  name: "upsTestDeepBatteryCalibration",
  descr: "The system is placed on battery to a discharge level, set by the manufacturer"
}, {
  oid: "1.3.6.1.2.1.33.1.8.1",
  name: "upsShutdownType",
  descr: "This object determines the nature of the action to be taken at the time when the countdown of the upsShutdownAfterDelay and upsRebootWithDuration objects reaches zero"
}, {
  oid: "1.3.6.1.2.1.33.1.8.2",
  name: "upsShutdownAfterDelay",
  descr: "Setting this object will shutdown either the UPS output or the UPS system after the indicated number of seconds"
}, {
  oid: "1.3.6.1.2.1.33.1.8.3",
  name: "upsStartupAfterDelay",
  descr: "Setting this object will start the output after the indicated number of seconds, including starting the UPS"
}, {
  oid: "1.3.6.1.2.1.33.1.8.4",
  name: "upsRebootWithDuration",
  descr: "Setting this object will immediately shutdown"
}, {
  oid: "1.3.6.1.2.1.33.1.8.5",
  name: "upsAutoRestart",
  descr: "Setting this object to on will cause the UPS system to restart after a shutdown"
}, {
  oid: "1.3.6.1.2.1.33.1.9.1",
  name: "upsConfigInputVoltage",
  descr: "The magnitude of the nominal input voltage"
}, {
  oid: "1.3.6.1.2.1.33.1.9.2",
  name: "upsConfigInputFreq",
  descr: "The nominal input frequency"
}, {
  oid: "1.3.6.1.2.1.33.1.9.3",
  name: "upsConfigOutputVoltage",
  descr: "The magnitude of the nominal output voltage"
}, {
  oid: "1.3.6.1.2.1.33.1.9.4",
  name: "upsConfigOutputFreq",
  descr: "The nominal output frequency"
}, {
  oid: "1.3.6.1.2.1.33.1.9.5",
  name: "upsConfigOutputVA",
  descr: "The magnitude of the nominal Volt-Amp rating"
}, {
  oid: "1.3.6.1.2.1.33.1.9.6",
  name: "upsConfigOutputPower",
  descr: "The magnitude of the nominal true power rating"
}, {
  oid: "1.3.6.1.2.1.33.1.9.7",
  name: "upsConfigLowBattTime",
  descr: "The value of upsEstimatedMinutesRemaining at which a lowBattery condition is declared"
}, {
  oid: "1.3.6.1.2.1.33.1.9.8",
  name: "upsConfigAudibleStatus",
  descr: "The requested state of the audible alarm"
}, {
  oid: "1.3.6.1.2.1.33.1.9.9",
  name: "upsConfigLowVoltageTransferPoint",
  descr: "he minimum input line voltage allowed before the UPS system transfers to battery backup"
}, {
  oid: "1.3.6.1.2.1.33.1.9.10",
  name: "upsConfigHighVoltageTransferPoint",
  descr: "The maximum line voltage allowed before the UPS system transfers to battery backup"
}, {
  oid: "1.3.6.1.2.1.33.2.1",
  name: "upsTrapOnBattery",
  descr: "The UPS is operating on battery power"
}, {
  oid: "1.3.6.1.2.1.33.2.2",
  name: "upsTrapTestCompleted",
  descr: "This trap is sent upon completion of a UPS diagnostic test"
}, {
  oid: "1.3.6.1.2.1.33.2.3",
  name: "upsTrapAlarmEntryAdded",
  descr: "This trap is sent each time an alarm is inserted into to the alarm table"
}, {
  oid: "1.3.6.1.2.1.33.2.4",
  name: "upsTrapAlarmEntryRemoved",
  descr: "This trap is sent each time an alarm is removed from the alarm table"
}, {
  oid: "1.3.6.1.2.1.33.3.1.1",
  name: "upsSubsetCompliance",
  descr: "The compliance statement for UPSs that only support the two-contact communication protocol"
}, {
  oid: "1.3.6.1.2.1.33.3.1.2",
  name: "upsBasicCompliance",
  descr: "The compliance statement for UPSs that support full-featured functions, such as control"
}, {
  oid: "1.3.6.1.2.1.33.3.1.3",
  name: "upsFullCompliance",
  descr: "The compliance statement for UPSs that support advanced full-featured functions"
}, {
  oid: "1.3.6.1.2.1.33.3.2.1",
  name: "upsSubsetGroups",
  descr: "Subset groups"
}, {
  oid: "1.3.6.1.2.1.33.3.2.1.1",
  name: "upsSubsetIdentGroup",
  descr: "The upsSubsetIdentGroup defines objects which are common across all UPSs which meet subset compliance"
}, {
  oid: "1.3.6.1.2.1.33.3.2.1.2",
  name: "upsSubsetBatteryGroup",
  descr: "The upsSubsetBatteryGroup defines the objects that are common to battery groups of two-contact UPSs"
}, {
  oid: "1.3.6.1.2.1.33.3.2.1.3",
  name: "upsSubsetInputGroup",
  descr: "The upsSubsetInputGroup defines the objects that are common to the Input groups of two-contact UPSs"
}, {
  oid: "1.3.6.1.2.1.33.3.2.1.4",
  name: "upsSubsetOutputGroup",
  descr: "The upsSubsetOutputGroup defines the objects that are common to the Output groups of two-contact UPSs"
}, {
  oid: "1.3.6.1.2.1.33.3.2.1.6",
  name: "upsSubsetAlarmGroup",
  descr: "The upsSubsetAlarmGroup defines the objects that are common to the Alarm groups of two-contact UPSs"
}, {
  oid: "1.3.6.1.2.1.33.3.2.1.8",
  name: "upsSubsetControlGroup",
  descr: "The upsSubsetControlGroup defines the objects that are common to the Control groups of two-contact UPSs"
}, {
  oid: "1.3.6.1.2.1.33.3.2.1.9",
  name: "upsSubsetConfigGroup",
  descr: "The upsSubsetConfigGroup defines the objects that are common to the Config groups of two-contact UPSs"
}, {
  oid: "1.3.6.1.2.1.33.3.2.2.1",
  name: "upsBasicIdentGroup",
  descr: "The upsBasicIdentGroup defines objects which are common to the Ident group of compliant UPSs which support basic functions"
}, {
  oid: "1.3.6.1.2.1.33.3.2.2.2",
  name: "upsBasicBatteryGroup",
  descr: "The upsBasicBatteryGroup defines the objects that are common to the battery groups of compliant UPSs which support basic functions"
}, {
  oid: "1.3.6.1.2.1.33.3.2.2.3",
  name: "upsBasicInputGroup",
  descr: "The upsBasicInputGroup defines the objects that are common to the Input groups of compliant UPSs which support basic functions"
}, {
  oid: "1.3.6.1.2.1.33.3.2.2.4",
  name: "upsBasicOutputGroup",
  descr: "The upsBasicOutputGroup defines the objects that are common to the Output groups of compliant UPSs which support basic functions"
}, {
  oid: "1.3.6.1.2.1.33.3.2.2.5",
  name: "upsBasicBypassGroup",
  descr: "The upsBasicBypassGroup defines the objects that are common to the Bypass groups of compliant UPSs which support basic functions"
}, {
  oid: "1.3.6.1.2.1.33.3.2.2.6",
  name: "upsBasicAlarmGroup",
  descr: "The upsBasicAlarmGroup defines the objects that are common to the Alarm groups of compliant UPSs which support basic functions"
}, {
  oid: "1.3.6.1.2.1.33.3.2.2.7",
  name: "upsBasicTestGroup",
  descr: "The upsBasicTestGroup defines the objects that are common to the Test groups of compliant UPSs which support basic functions"
}, {
  oid: "1.3.6.1.2.1.33.3.2.2.8",
  name: "upsBasicControlGroup",
  descr: "The upsBasicControlGroup defines the objects that are common to the Control groups of compliant UPSs which support basic functions"
}, {
  oid: "1.3.6.1.2.1.33.3.2.2.9",
  name: "upsBasicConfigGroup",
  descr: "The upsBasicConfigGroup defines the objects that are common to the Config groups of UPSs which support basic functions"
}, {
  oid: "1.3.6.1.2.1.33.3.2.3.1",
  name: "upsFullIdentGroup",
  descr: "The upsFullIdentGroup defines objects which are common to the Ident group of fully compliant UPSs"
}, {
  oid: "1.3.6.1.2.1.33.3.2.3.2",
  name: "upsFullBatteryGroup",
  descr: "The upsFullBatteryGroup defines the objects that are common to the battery groups of fully compliant UPSs"
}, {
  oid: "1.3.6.1.2.1.33.3.2.3.3",
  name: "upsFullInputGroup",
  descr: "The upsFullInputGroup defines the objects that are common to the Input groups of fully compliant UPSs"
}, {
  oid: "1.3.6.1.2.1.33.3.2.3.4",
  name: "upsFullOutputGroup",
  descr: "The upsFullOutputGroup defines the objects that are common to the Output groups of fully compliant UPSs"
}, {
  oid: "1.3.6.1.2.1.33.3.2.3.5",
  name: "upsFullBypassGroup",
  descr: "The upsFullBypassGroup defines the objects that are common to the Bypass groups of fully compliant UPSs"
}, {
  oid: "1.3.6.1.2.1.33.3.2.3.6",
  name: "upsFullAlarmGroup",
  descr: "The upsFullAlarmGroup defines the objects that are common to the Alarm groups of fully compliant UPSs"
}, {
  oid: "1.3.6.1.2.1.33.3.2.3.7",
  name: "upsFullTestGroup",
  descr: "The upsFullTestGroup defines the objects that are common to the Test groups of fully compliant UPSs"
}, {
  oid: "1.3.6.1.2.1.33.3.2.3.8",
  name: "upsFullControlGroup",
  descr: "The upsFullControlGroup defines the objects that are common to the Control groups of fully compliant UPSs"
}, {
  oid: "1.3.6.1.2.1.33.3.2.3.9",
  name: "upsFullConfigGroup",
  descr: "The upsFullConfigGroup defines the objects that are common to the Config groups of fully compliant UPSs"
}];