var printers = [{
    oid: "1.3.6.1.2.1.25.3.5.1.1",
    name: "hrPrinterStatus",
    descr: "The current status of this printer device"
}, {
    oid: "1.3.6.1.2.1.25.3.5.1.2",
    name: "hrPrinterDetectedErrorState",
    descr: "This object represents any error conditions detected by the printer"
}, {
    oid: "1.3.6.1.2.1.43.2.2.1",
    name: "prtGeneralGroup",
    descr: "The general printer group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.2",
    name: "prtResponsiblePartyGroup",
    descr: "The responsible party group contains contact information for humans responsible for the printer"
}, {
    oid: "1.3.6.1.2.1.43.2.2.3",
    name: "prtInputGroup",
    descr: "The input group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.4",
    name: "prtExtendedInputGroup",
    descr: "The extended input group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.5",
    name: "prtInputMediaGroup",
    descr: "The input media group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.6",
    name: "prtOutputGroup",
    descr: "The output group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.7",
    name: "prtExtendedOutputGroup",
    descr: "The extended output group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.8",
    name: "prtOutputDimensionsGroup",
    descr: "The output dimensions group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.9",
    name: "prtOutputFeaturesGroup",
    descr: "The output features group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.10",
    name: "prtMarkerGroup",
    descr: "The marker group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.11",
    name: "prtMarkerSuppliesGroup",
    descr: "The marker supplies group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.12",
    name: "prtMarkerColorantGroup",
    descr: "The marker colorant group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.13",
    name: "prtMediaPathGroup",
    descr: "The media path group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.14",
    name: "prtChannelGroup",
    descr: "The channel group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.15",
    name: "prtInterpreterGroup",
    descr: "The interpreter group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.16",
    name: "prtConsoleGroup",
    descr: "The console group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.17",
    name: "prtAlertTableGroup",
    descr: "The alert table group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.18",
    name: "prtAlertTimeGroup",
    descr: "The alert time group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.19",
    name: "prtAuxiliarySheetGroup",
    descr: "The auxiliary sheet group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.20",
    name: "prtInputSwitchingGroup",
    descr: "The input switching group"
}, {
    oid: "1.3.6.1.2.1.43.2.2.21",
    name: "prtGeneralV2Group",
    descr: "The general printer group with new v2 objects"
}, {
    oid: "1.3.6.1.2.1.43.2.2.22",
    name: "prtAlertTableV2Group",
    descr: "The alert table group with new v2 objects and prtAlertIndex changed to MAX-ACCESS"
}, {
    oid: "1.3.6.1.2.1.43.2.2.23",
    name: "prtChannelV2Group",
    descr: "The channel group with a new v2 object"
}, {
    oid: "1.3.6.1.2.1.43.2.2.24",
    name: "prtAlertTrapGroup",
    descr: "prtAlertTrapGroup"
}, {
    oid: "1.3.6.1.2.1.43.2.3",
    name: "prtMIB2Compliance",
    descr: "The compliance statement for agents that implement the printer MIB V2"
}, {
    oid: "1.3.6.1.2.1.43.2.4",
    name: "prtMIB2Groups",
    descr: "prtMIB2Groups "
}, {
    oid: "1.3.6.1.2.1.43.2.5",
    name: "finMIBCompliance",
    descr: "The compliance statement for agents that implement the finisher MIB"
}, {
    oid: "1.3.6.1.2.1.43.2.6.1",
    name: "finDeviceGroup",
    descr: "The finisher device group"
}, {
    oid: "1.3.6.1.2.1.43.2.6.2",
    name: "finSupplyGroup",
    descr: "The finisher supply group"
}, {
    oid: "1.3.6.1.2.1.43.2.6.3",
    name: "finSupplyMediaInputGroup",
    descr: "The finisher supply, media input group"
}, {
    oid: "1.3.6.1.2.1.43.2.6.4",
    name: "finDeviceAttributeGroup",
    descr: "The finisher device attribute group"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.1",
    name: "prtGeneralConfigChanges",
    descr: "Counts configuration changes that change the capabilities of a printer"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.2",
    name: "prtGeneralCurrentLocalization",
    descr: "The value of the prtLocalizationIndex corresponding to the current language, country, and character set"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.3",
    name: "prtGeneralReset",
    descr: "Setting this value to `powerCycleReset, `resetToNVRAM, or `resetToFactoryDefaults will result in the resetting of the printer"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.4",
    name: "prtGeneralCurrentOperator",
    descr: "The name of the current human operator responsible for operating this printer"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.5",
    name: "prtGeneralServicePerson",
    descr: "The name of the last human responsible for servicing this printer"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.6",
    name: "prtInputDefaultIndex",
    descr: "The value of prtInputIndex corresponding to the default input sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.7",
    name: "prtOutputDefaultIndex",
    descr: "The value of prtOutputIndex corresponding to the default output sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.8",
    name: "prtMarkerDefaultIndex",
    descr: "The value of prtMarkerIndex corresponding to the default markersub-unit"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.9",
    name: "prtMediaPathDefaultIndex",
    descr: "The value of prtMediaPathIndex corresponding to the default media path"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.10",
    name: "prtConsoleLocalization",
    descr: "The value of the prtLocalizationIndex corresponding to the language, country, and character set to be used for the console"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.11",
    name: "prtConsoleNumberOfDisplayLines",
    descr: "The number of lines on the printers physical display"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.12",
    name: "prtConsoleNumberOfDisplayChars",
    descr: "The number of characters per line displayed on the physical display"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.13",
    name: "prtConsoleDisable",
    descr: "This object enables or disables manual input from the operators console"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.14",
    name: "prtAuxiliarySheetStartupPage",
    descr: "Used to enable or disable printing a startup page"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.15",
    name: "prtAuxiliarySheetBannerPage",
    descr: "Used to enable or disable printing banner pages at the beginning of jobs"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.16",
    name: "prtGeneralPrinterName",
    descr: "An administrator-specified name for this printer"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.17",
    name: "prtGeneralSerialNumber",
    descr: "A recorded serial number for this device that indexes some type device catalog or inventory"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.18",
    name: "prtAlertCriticalEvents",
    descr: "A running counter of the number of critical alert events that have been recorded in the alert table"
}, {
    oid: "1.3.6.1.2.1.43.5.1.1.19",
    name: "prtAlertAllEvents",
    descr: "A running counter of the total number of alert event entries that have been recorded in the alert table"
}, {
    oid: "1.3.6.1.2.1.43.5.2.1.1",
    name: "prtStorageRefSeqNumber",
    descr: "This value will be unique amongst all entries with a common value of hrStorageIndex"
}, {
    oid: "1.3.6.1.2.1.43.5.2.1.2",
    name: "prtStorageRefIndex",
    descr: "The value of the hrDeviceIndex of the printer device that this storageEntry is associated with"
}, {
    oid: "1.3.6.1.2.1.43.5.3.1.1",
    name: "prtDeviceRefSeqNumber",
    descr: "This value will be unique amongst all entries with a common value of hrDeviceIndex"
}, {
    oid: "1.3.6.1.2.1.43.5.3.1.2",
    name: "prtDeviceRefIndex",
    descr: "The value of the hrDeviceIndex of the printer device that this deviceEntry is associated with"
}, {
    oid: "1.3.6.1.2.1.43.6.1.1.1",
    name: "prtCoverIndex",
    descr: "A unique value used by the printer to identify this Cover sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.6.1.1.2",
    name: "prtCoverDescription",
    descr: "The manufacturer provided cover sub-mechanism name in the localization specified by prtGeneralCurrentLocalization"
}, {
    oid: "1.3.6.1.2.1.43.6.1.1.3",
    name: "prtCoverStatus",
    descr: "The status of this cover sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.7.1.1.1",
    name: "prtLocalizationIndex",
    descr: "A unique value used by the printer to identify this localization entry"
}, {
    oid: "1.3.6.1.2.1.43.7.1.1.2",
    name: "prtLocalizationLanguage",
    descr: "A two character language code from ISO 639"
}, {
    oid: "1.3.6.1.2.1.43.7.1.1.3",
    name: "prtLocalizationCountry",
    descr: "A two character country code from ISO 3166"
}, {
    oid: "1.3.6.1.2.1.43.7.1.1.4",
    name: "prtLocalizationCharacterSet",
    descr: "The coded character set used for this localization"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.1",
    name: "prtInputIndex",
    descr: "A unique value used by the printer to identify this input sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.2",
    name: "prtInputType",
    descr: "The type of technology (discriminated primarily according to feeder mechanism type) employed by the input sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.3",
    name: "prtInputDimUnit",
    descr: "The unit of measurement for use calculating and relaying dimensional values for this input sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.4",
    name: "prtInputMediaDimFeedDirDeclared",
    descr: "This object provides the value of the declared dimension, in the feed direction, of the media that is (or, if empty, was or will be) in this input sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.5",
    name: "prtInputMediaDimXFeedDirDeclared",
    descr: "This object provides the value of the declared dimension, in the cross feed direction, of the media that is (or, if empty, was or will be) in this input sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.6",
    name: "prtInputMediaDimFeedDirChosen",
    descr: "The printer will act as if media of the chosen dimension (in the feed direction) is present in this input source"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.7",
    name: "prtInputMediaDimXFeedDirChosen",
    descr: "The printer will act as if media of the chosen dimension (in the cross feed direction) is present in this input source"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.8",
    name: "prtInputCapacityUnit",
    descr: "The unit of measurement for use in calculating and relaying capacity values for this input sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.9",
    name: "prtInputMaxCapacity",
    descr: "The maximum capacity of the input sub-unit in input sub-unit capacity units (CapacityUnit)"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.10",
    name: "prtInputCurrentLevel",
    descr: "The current capacity of the input sub-unit in input sub-unit capacity units (CapacityUnit)"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.11",
    name: "prtInputStatus",
    descr: "The current status of this input sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.12",
    name: "prtInputMediaName",
    descr: "A description of the media contained in this input sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.13",
    name: "prtInputName",
    descr: "The name assigned to this input sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.14",
    name: "prtInputVendorName",
    descr: "The vendor name of this input sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.15",
    name: "prtInputModel",
    descr: "The model name of this input sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.16",
    name: "prtInputVersion",
    descr: "The version of this input sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.17",
    name: "prtInputSerialNumber",
    descr: "The serial number assigned to this input sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.18",
    name: "prtInputDescription",
    descr: "A free-form text description of this input sub-unit in the localization specified by prtGeneralCurrentLocalization"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.19",
    name: "prtInputSecurity",
    descr: "Indicates if this input sub-unit has some security associated with it"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.20",
    name: "prtInputMediaWeight",
    descr: "The weight of the medium associated with this input sub-unit in grams / per meter squared. The value (-2) means unknown"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.21",
    name: "prtInputMediaType",
    descr: "The name of the type of medium associated with this input sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.22",
    name: "prtInputMediaColor",
    descr: "The name of the color of the medium associated with this input sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.23",
    name: "prtInputMediaFormParts",
    descr: "The number of parts associated with the medium associated with this input sub-unit if the medium is a multi-part form"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.24",
    name: "prtInputMediaLoadTimeout",
    descr: "When the printer is not able to print due to a subunit being empty or the requested media must be manually loaded, the printer will wait for the duration (in seconds) specified by this object"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.25",
    name: "prtInputNextIndex",
    descr: "The value of prtInputIndex corresponding to the input subunit which will be used when this input subunit is emptied and the time-out specified by prtInputMediaLoadTimeout expires"
}, {
    oid: "1.3.6.1.2.1.43.8.2.1.26",
    name: "prtinputnextindex",
    descr: "The value of prtInputIndex corresponding to the input subunit which will be used when this input subunit is emptied and the timeout specified by prtInputMediaLoadTimeout expires"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.1",
    name: "prtOutputIndex",
    descr: "A unique value used by this printer to identify this output sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.2",
    name: "prtOutputType",
    descr: "The type of technology supported by this output sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.3",
    name: "prtOutputCapacityUnit",
    descr: "The unit of measurement for use in calculating and relaying capacity values for this output sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.4",
    name: "prtOutputMaxCapacity",
    descr: "The maximum capacity of this output sub-unit in output sub-unit capacity units (CapacityUnit)"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.5",
    name: "prtOutputRemainingCapacity",
    descr: "The remaining capacity of the possible output sub-unit capacity in output sub-unit capacity units (CapacityUnit) of this output sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.6",
    name: "prtOutputStatus",
    descr: "The current status of this output sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.7",
    name: "prtOutputName",
    descr: "The name assigned to this output sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.8",
    name: "prtOutputVendorName",
    descr: "The vendor name of this output sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.9",
    name: "prtOutputModel",
    descr: "The name assigned to this output sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.10",
    name: "prtOutputVersion",
    descr: "The version of this output sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.11",
    name: "prtOutputSerialNumber",
    descr: "The serial number assigned to this output sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.12",
    name: "prtOutputDescription",
    descr: " A free-form text description of this output sub-unit in the localization specified by prtGeneralCurrentLocalization"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.13",
    name: "prtOutputSecurity",
    descr: "Indicates if this output sub-unit has some security associated with it and if that security is enabled or not"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.14",
    name: "prtOutputDimUnit",
    descr: "The unit of measurement for use in calculating and relaying dimensional values for this output sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.15",
    name: "prtOutputMaxDimFeedDir",
    descr: "The maximum dimensions supported by this output sub-unit for measurements taken parallel relative to the feed direction associated with that sub-unit in output sub-unit dimensional units"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.16",
    name: "prtOutputMaxDimXFeedDir",
    descr: "The maximum dimensions supported by this output sub-unit for measurements taken ninety degrees relative to the feed direction associated with that sub-unit in output sub-unit dimensional units"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.17",
    name: "prtOutputMinDimFeedDir",
    descr: "The minimum dimensions supported by this output sub-unit for measurements taken parallel relative to the feed direction associated with that sub-unit in output sub-unit dimensional units"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.18",
    name: "prtOutputMinDimXFeedDir",
    descr: "The minimum dimensions supported by this output sub-unit for measurements taken ninety degrees relative to the feed direction associated with that sub-unit in output sub-unit dimensional units"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.19",
    name: "prtOutputStackingOrder",
    descr: "The current state of the stacking order for the associated output sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.20",
    name: "prtOutputPageDeliveryOrientation",
    descr: "The reading surface that will be `up when pages are delivered to the associated output sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.21",
    name: "prtOutputBursting",
    descr: "This object indicates that the outputing sub-unit supports bursting, and if so, whether the feature is enabled"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.22",
    name: "prtOutputDecollating",
    descr: "This object indicates that the output supports supports decollating, and if so, whether the feature is enabled"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.23",
    name: "prtOutputPageCollated",
    descr: "This object indicates that the output sub-unit supports page collation, and if so, whether the feature is enabled"
}, {
    oid: "1.3.6.1.2.1.43.9.2.1.24",
    name: "prtOutputOffsetStacking",
    descr: "This object indicates that the output supports supports offset stacking, and if so, whether the feature is enabled"
}, {
    oid: "1.3.6.1.2.1.43.10.2.1.1",
    name: "prtMarkerIndex",
    descr: "A unique value used by the printer to identify this marking SubUnitStatus"
}, {
    oid: "1.3.6.1.2.1.43.10.2.1.2",
    name: "prtMarkerMarkTech",
    descr: "The type of marking technology used for this marking sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.10.2.1.3",
    name: "prtMarkerCounterUnit",
    descr: "The unit that will be used by the printer when reporting counter values for this marking sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.10.2.1.4",
    name: "prtMarkerLifeCount",
    descr: "The count of the number of units of measure counted during the life of printer using units of measure as specified by CounterUnit"
}, {
    oid: "1.3.6.1.2.1.43.10.2.1.5",
    name: "prtMarkerPowerOnCount",
    descr: "The count of the number of units of measure counted since the equipment was most recently powered on using units of measure as specified by CounterUnit"
}, {
    oid: "1.3.6.1.2.1.43.10.2.1.6",
    name: "prtMarkerProcessColorants",
    descr: "The number of process colors supported by this marker"
}, {
    oid: "1.3.6.1.2.1.43.10.2.1.7",
    name: "prtMarkerSpotColorants",
    descr: "The number of spot colors supported by this marker"
}, {
    oid: "1.3.6.1.2.1.43.10.2.1.8",
    name: "prtMarkerAddressabilityUnit",
    descr: "The unit of measure of distances"
}, {
    oid: "1.3.6.1.2.1.43.10.2.1.9",
    name: "prtMarkerAddressabilityFeedDir",
    descr: "The number of addressable marking positions in the feed direction per 10000 units of measure specified by AddressabilityUnit"
}, {
    oid: "1.3.6.1.2.1.43.10.2.1.10",
    name: "prtMarkerAddressabilityXFeedDir",
    descr: "The number of addressable marking positions in the cross feed direction in 10000 units of measure specified by AddressabilityUnit"
}, {
    oid: "1.3.6.1.2.1.43.10.2.1.11",
    name: "prtMarkerNorthMargin",
    descr: "The margin, in units identified by AddressabilityUnit, from the leading edge of the medium as the medium flows throught the marking engine with the side to be imaged facing the observer"
}, {
    oid: "1.3.6.1.2.1.43.10.2.1.12",
    name: "prtMarkerSouthMargin",
    descr: "The margin from the South edge (see NorthMargin) of the medium in units identified by AddressabilityUnit"
}, {
    oid: "1.3.6.1.2.1.43.10.2.1.13",
    name: "prtMarkerWestMargin",
    descr: "The margin from the West edge (see NorthMargin) of the medium in units identified by AddressabilityUnit"
}, {
    oid: "1.3.6.1.2.1.43.10.2.1.14",
    name: "prtMarkerEastMargin",
    descr: "The margin from the East edge (see NorthMargin) of the medium in units identified by AddressabilityUnit"
}, {
    oid: "1.3.6.1.2.1.43.10.2.1.15",
    name: "prtMarkerStatus",
    descr: "The current status of this marker sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.11.1.1.1",
    name: "prtMarkerSuppliesIndex",
    descr: "A unique value used by the printer to identify this marker supply"
}, {
    oid: "1.3.6.1.2.1.43.11.1.1.2",
    name: "prtMarkerSuppliesMarkerIndex",
    descr: "The value of prtMarkerIndex corresponding to the marking sub-unit with which this marker supply sub-unit is associated"
}, {
    oid: "1.3.6.1.2.1.43.11.1.1.3",
    name: "prtMarkerSuppliesColorantIndex",
    descr: "The value of prtMarkerColorantIndex corresponding to the colorant with which this marker supply sub-unit is associated"
}, {
    oid: "1.3.6.1.2.1.43.11.1.1.4",
    name: "prtMarkerSuppliesClass",
    descr: "Indicates whether this supply entity represents a supply container that is consumed or a receptacle that is filled"
}, {
    oid: "1.3.6.1.2.1.43.11.1.1.5",
    name: "prtMarkerSuppliesType",
    descr: "The type of this supply"
}, {
    oid: "1.3.6.1.2.1.43.11.1.1.6",
    name: "prtMarkerSuppliesDescription",
    descr: "The description of this supply container/receptacle in the localization specified by prtGeneralCurrentLocalization"
}, {
    oid: "1.3.6.1.2.1.43.11.1.1.7",
    name: "prtMarkerSuppliesSupplyUnit",
    descr: "Unit of this marker supply container/receptacle"
}, {
    oid: "1.3.6.1.2.1.43.11.1.1.8",
    name: "prtMarkerSuppliesMaxCapacity",
    descr: "The maximum capacity of this supply container/receptacle expressed in SupplyUnit"
}, {
    oid: "1.3.6.1.2.1.43.11.1.1.9",
    name: "prtMarkerSuppliesLevel",
    descr: "The current level if this supply is a container; the remaining space if this supply is a receptacle"
}, {
    oid: "1.3.6.1.2.1.43.12.1.1.1",
    name: "prtMarkerColorantIndex",
    descr: "A unique value used by the printer to identify this colorant"
}, {
    oid: "1.3.6.1.2.1.43.12.1.1.2",
    name: "prtMarkerColorantMarkerIndex",
    descr: "The value of prtMarkerIndex corresponding to the marker sub-unit with which this colorant entry is associated"
}, {
    oid: "1.3.6.1.2.1.43.12.1.1.3",
    name: "prtMarkerColorantRole",
    descr: "The role played by this colorant"
}, {
    oid: "1.3.6.1.2.1.43.12.1.1.4",
    name: "prtMarkerColorantValue",
    descr: "The name of the color of this The name of the color of this colorant using standardized string names from ISO 10175 (DPA) and ISO 10180 (SPDL)"
}, {
    oid: "1.3.6.1.2.1.43.12.1.1.5",
    name: "prtMarkerColorantTonality",
    descr: "The distinct levels of tonality realizable by a marking sub-unit when using this colorant"
}, {
    oid: "1.3.6.1.2.1.43.13.4.1.1",
    name: "prtMediaPathIndex",
    descr: "A unique value used by the printer to identify this media path"
}, {
    oid: "1.3.6.1.2.1.43.13.4.1.2",
    name: "prtMediaPathMaxSpeedPrintUnit",
    descr: "The unit of measure used in specifying the speed of all media paths in the printer"
}, {
    oid: "1.3.6.1.2.1.43.13.4.1.3",
    name: "prtMediaPathMediaSizeUnit",
    descr: "The units of measure of media size for use in calculating and relaying dimensional values for all media paths in the printer"
}, {
    oid: "1.3.6.1.2.1.43.13.4.1.4",
    name: "prtMediaPathMaxSpeed",
    descr: "The maximum printing speed of this media path expressed in prtMediaPathMaxSpeedUnits"
}, {
    oid: "1.3.6.1.2.1.43.13.4.1.5",
    name: "prtMediaPathMaxMediaFeedDir",
    descr: "The maximum physical media size in the feed direction of this media path expressed in units of measure specified by MediaSizeUnit"
}, {
    oid: "1.3.6.1.2.1.43.13.4.1.6",
    name: "prtMediaPathMaxMediaXFeedDir",
    descr: "The maximum physical media size across the feed direction of this media path expressed in units of measure specified by MediaSizeUnit"
}, {
    oid: "1.3.6.1.2.1.43.13.4.1.7",
    name: "prtMediaPathMinMediaFeedDir",
    descr: "The minimum physical media size in the feed direction of this media path expressed in units of measure specified by MediaSizeUnit"
}, {
    oid: "1.3.6.1.2.1.43.13.4.1.8",
    name: "prtMediaPathMinMediaXFeedDir",
    descr: "The minimum physical media size across the feed direction of this media path expressed in units of measure specified by MediaSizeUnit"
}, {
    oid: "1.3.6.1.2.1.43.13.4.1.9",
    name: "prtMediaPathType",
    descr: "The type of the media path for this media path"
}, {
    oid: "1.3.6.1.2.1.43.13.4.1.10",
    name: "prtMediaPathDescription",
    descr: "The manufacturer-provided description of this media path in the localization specified by prtGeneralCurrentLocalization"
}, {
    oid: "1.3.6.1.2.1.43.13.4.1.11",
    name: "prtMediaPathStatus",
    descr: "The current status of this media path"
}, {
    oid: "1.3.6.1.2.1.43.14.1.1.1",
    name: "prtChannelIndex",
    descr: "A unique value used by the printer to identify this data channel"
}, {
    oid: "1.3.6.1.2.1.43.14.1.1.2",
    name: "prtChannelType",
    descr: "The type of this print data channel"
}, {
    oid: "1.3.6.1.2.1.43.14.1.1.3",
    name: "prtChannelProtocolVersion",
    descr: "The version of the protocol used on this channel"
}, {
    oid: "1.3.6.1.2.1.43.14.1.1.4",
    name: "prtChannelCurrentJobCntlLangIndex",
    descr: "The value of prtInterpreterIndex corresponding to the Control Language Interpreter for this channel"
}, {
    oid: "1.3.6.1.2.1.43.14.1.1.5",
    name: "prtChannelDefaultPageDescLangIndex",
    descr: "The value of prtInterpreterIndex corresponding to the Page Description Language Interpreter for this channel"
}, {
    oid: "1.3.6.1.2.1.43.14.1.1.6",
    name: "prtChannelState",
    descr: "The state of this print data channel"
}, {
    oid: "1.3.6.1.2.1.43.14.1.1.7",
    name: "prtChannelIfIndex",
    descr: "The value of ifIndex (in the ifTable; see the interface section of MIB-2/RFC 1213) which corresponds to this channel"
}, {
    oid: "1.3.6.1.2.1.43.14.1.1.8",
    name: "prtChannelStatus",
    descr: "The current status of the channel"
}, {
    oid: "1.3.6.1.2.1.43.14.1.1.9",
    name: "prtChannelInformation",
    descr: "Auxiliary information to allow a printing application to use the channel for data submission to the printer"
}, {
    oid: "1.3.6.1.2.1.43.15.1.1.1",
    name: "prtInterpreterIndex",
    descr: "A unique value for each PDL or control language for which there exists an interpreter or emulator in the printer"
}, {
    oid: "1.3.6.1.2.1.43.15.1.1.2",
    name: "prtInterpreterLangFamily",
    descr: "The family name of a Page Description Language (PDL) or control language which this interpreter in the printer can interpret or emulate"
}, {
    oid: "1.3.6.1.2.1.43.15.1.1.3",
    name: "prtInterpreterLangLevel",
    descr: "The level of the language which this interpreter is interpreting or emulating"
}, {
    oid: "1.3.6.1.2.1.43.15.1.1.4",
    name: "prtInterpreterLangVersion",
    descr: "The date code or version of the language which this interpreter is interpreting or emulating"
}, {
    oid: "1.3.6.1.2.1.43.15.1.1.5",
    name: "prtInterpreterDescription",
    descr: "A string to identify this interpreter in the localization specified by prtGeneralCurrentLocalization as opposed to the language which is being interpreted"
}, {
    oid: "1.3.6.1.2.1.43.15.1.1.6",
    name: "prtInterpreterVersion",
    descr: "The date code, version number, or other product specific information tied to this interpreter"
}, {
    oid: "1.3.6.1.2.1.43.15.1.1.7",
    name: "prtInterpreterDefaultOrientation",
    descr: "The current orientation default for this interpreter"
}, {
    oid: "1.3.6.1.2.1.43.15.1.1.8",
    name: "prtInterpreterFeedAddressability",
    descr: "The maximum interpreter addressability in the feed direction in 10000 prtMarkerAddressabilityUnit s (see prtMarkerAddressabilityFeedDir ) for this interpreter"
}, {
    oid: "1.3.6.1.2.1.43.15.1.1.9",
    name: "prtInterpreterXFeedAddressability",
    descr: "The maximum interpreter addressability in the cross feed direction in 10000 prtMarkerAddressabilityUnit s (see prtMarkerAddressabilityXFeedDir) for this interpreter"
}, {
    oid: "1.3.6.1.2.1.43.15.1.1.10",
    name: "prtInterpreterDefaultCharSetIn",
    descr: "The default coded character set for input octets encountered outside a context in which the Page Description Language established the interpretation of the octets"
}, {
    oid: "1.3.6.1.2.1.43.15.1.1.11",
    name: "prtInterpreterDefaultCharSetOut",
    descr: "The default character set for data coming from this interpreter through the printers output channel"
}, {
    oid: "1.3.6.1.2.1.43.15.1.1.12",
    name: "prtInterpreterTwoWay",
    descr: "Indicates whether or not this interpreter returns information back to the host"
}, {
    oid: "1.3.6.1.2.1.43.16.5.1.1",
    name: "prtConsoleDisplayBufferIndex",
    descr: "A unique value for each console line in the printer"
}, {
    oid: "1.3.6.1.2.1.43.16.5.1.2",
    name: "prtConsoleDisplayBufferText",
    descr: "The content of a line in the logical display buffer of the operators console of the printer"
}, {
    oid: "1.3.6.1.2.1.43.17.6.1.1",
    name: "prtConsoleLightIndex",
    descr: "A unique value used by the printer to identify this light"
}, {
    oid: "1.3.6.1.2.1.43.17.6.1.2",
    name: "prtConsoleOnTime",
    descr: "The on time in milliseconds of blinking of this light"
}, {
    oid: "1.3.6.1.2.1.43.17.6.1.3",
    name: "prtConsoleOffTime",
    descr: "The off time in milliseconds of blinking of this light"
}, {
    oid: "1.3.6.1.2.1.43.17.6.1.4",
    name: "prtConsoleColor",
    descr: "The color of this light"
}, {
    oid: "1.3.6.1.2.1.43.17.6.1.5",
    name: "prtConsoleDescription",
    descr: "The vendor description or label of this light in the localization specified by prtConsoleLocalization"
}, {
    oid: "1.3.6.1.2.1.43.18.1.1.1",
    name: "prtAlertIndex",
    descr: "The index value used to determine which alerts have been added or removed from the alert table"
}, {
    oid: "1.3.6.1.2.1.43.18.1.1.2",
    name: "prtAlertSeverityLevel",
    descr: "The level of severity of this alert table entry"
}, {
    oid: "1.3.6.1.2.1.43.18.1.1.3",
    name: "prtAlertTrainingLevel",
    descr: "The level of training required to handle this alert"
}, {
    oid: "1.3.6.1.2.1.43.18.1.1.4",
    name: "prtAlertGroup",
    descr: "The type of sub-unit within the printer model that this alert is related"
}, {
    oid: "1.3.6.1.2.1.43.18.1.1.5",
    name: "prtAlertGroupIndex",
    descr: "An index of the row within the principle table in the group identified by prtAlertGroup that represents the sub-unit of the printer that caused this alert"
}, {
    oid: "1.3.6.1.2.1.43.18.1.1.6",
    name: "prtAlertLocation",
    descr: "The sub-unit location that is defined by the printer manufacturer to further refine the location of this alert within the designated sub-unit"
}, {
    oid: "1.3.6.1.2.1.43.18.1.1.7",
    name: "prtAlertCode",
    descr: "The code that describes the type of alert for this entry in the table"
}, {
    oid: "1.3.6.1.2.1.43.18.1.1.8",
    name: "prtAlertDescription",
    descr: "A description of this alert entry in the localization specified by prtGeneralCurrentLocalization"
}, {
    oid: "1.3.6.1.2.1.43.18.1.1.9",
    name: "prtAlertTime",
    descr: "The value of sysUpTime at the time that this alert was generated"
}, {
    oid: "1.3.6.1.2.1.43.18.2.0.1",
    name: "printerV2Alert",
    descr: "This trap is sent whenever a critical event is added to the prtAlertTable"
}, {
    oid: "1.3.6.1.2.1.43.30.1.1.1",
    name: "finDeviceIndex",
    descr: "A unique value used to identify a finisher process"
}, {
    oid: "1.3.6.1.2.1.43.30.1.1.2",
    name: "finDeviceType",
    descr: "Defines the type of finishing process associated with this table row entry"
}, {
    oid: "1.3.6.1.2.1.43.30.1.1.3",
    name: "finDevicePresentOnOff",
    descr: "Indicates if this finishing device subunit is available and whether the device subunit is enabled"
}, {
    oid: "1.3.6.1.2.1.43.30.1.1.4",
    name: "finDeviceCapacityUnit",
    descr: "The unit of measure for specifying the capacity of this finisher device subunit"
}, {
    oid: "1.3.6.1.2.1.43.30.1.1.5",
    name: "finDeviceMaxCapacity",
    descr: "The maximum capacity of this finisher device subunit in finDeviceCapacityUnits"
}, {
    oid: "1.3.6.1.2.1.43.30.1.1.6",
    name: "finDeviceCurrentCapacity",
    descr: "The current capacity of this finisher device subunit in finDeviceCapacityUnits"
}, {
    oid: "1.3.6.1.2.1.43.30.1.1.7",
    name: "finDeviceAssociatedMediaPaths",
    descr: "Indicates the media paths which can supply media for this finisher device"
}, {
    oid: "1.3.6.1.2.1.43.30.1.1.8",
    name: "finDeviceAssociatedOutputs",
    descr: "Indicates the printer output subunits this finisher device subunit services"
}, {
    oid: "1.3.6.1.2.1.43.30.1.1.9",
    name: "finDeviceStatus",
    descr: "Indicates the current status of this finisher device subunit"
}, {
    oid: "1.3.6.1.2.1.43.30.1.1.10",
    name: "finDeviceDescription",
    descr: "A free form text description of this device subunit in the localization specified by prtGeneralCurrentLocalization"
}, {
    oid: "1.3.6.1.2.1.43.31.1.1.1",
    name: "finSupplyIndex",
    descr: "A unique value used by a finisher to identify this supply container/receptacle"
}, {
    oid: "1.3.6.1.2.1.43.31.1.1.2",
    name: "finSupplyDeviceIndex",
    descr: "The value of finDeviceIndex corresponding to the finishing device subunit with which this finisher supply is associated"
}, {
    oid: "1.3.6.1.2.1.43.31.1.1.3",
    name: "finSupplyClass",
    descr: "This value indicates whether this supply entity represents a supply that is consumed or a container that is filled"
}, {
    oid: "1.3.6.1.2.1.43.31.1.1.4",
    name: "finSupplyType",
    descr: "The type of this supply"
}, {
    oid: "1.3.6.1.2.1.43.31.1.1.5",
    name: "finSupplyDescription",
    descr: "The description of this supply/receptacle in text useful for operators and management applications and in the localization specified by prtGeneralCurrentLocalization"
}, {
    oid: "1.3.6.1.2.1.43.31.1.1.6",
    name: "finSupplyUnit",
    descr: "Unit of measure of this finisher supply container or receptacle"
}, {
    oid: "1.3.6.1.2.1.43.31.1.1.7",
    name: "finSupplyMaxCapacity",
    descr: "The maximum capacity of this supply container/receptacle expressed in Supply Units"
}, {
    oid: "1.3.6.1.2.1.43.31.1.1.8",
    name: "finSupplyCurrentLevel",
    descr: "The current level if this supply is a container; the remaining space if this supply is a receptacle"
}, {
    oid: "1.3.6.1.2.1.43.31.1.1.9",
    name: "finSupplyColorName",
    descr: "The PWG Standardized Media Names specification [PWGMEDIA], section 4 Media Color Names, contains the recommended values for this object"
}, {
    oid: "1.3.6.1.2.1.43.32.1.1.1",
    name: "finSupplyMediaInputIndex",
    descr: "A unique value used by a finisher to identify this supply media input subunit"
}, {
    oid: "1.3.6.1.2.1.43.32.1.1.2",
    name: "finSupplyMediaInputDeviceIndex",
    descr: "The value of finDeviceIndex corresponding to the finishing device subunit with which this finisher media supply is associated"
}, {
    oid: "1.3.6.1.2.1.43.32.1.1.3",
    name: "finSupplyMediaInputSupplyIndex",
    descr: "The value of finDeviceIndex corresponding to the finishing device subunit with which this finisher media supply is associated"
}, {
    oid: "1.3.6.1.2.1.43.32.1.1.4",
    name: "finSupplyMediaInputType",
    descr: "The type of technology (discriminated primarily according to the feeder mechanism type) employed by the input subunit"
}, {
    oid: "1.3.6.1.2.1.43.32.1.1.5",
    name: "finSupplyMediaInputDimUnit",
    descr: "The unit of measure for specifying dimensional values for this input device"
}, {
    oid: "1.3.6.1.2.1.43.32.1.1.6",
    name: "finSupplyMediaInputMediaDimFeedDir",
    descr: "This object provides the value of the dimension in the feed direction of the media that is placed or will be placed in this input device"
}, {
    oid: "1.3.6.1.2.1.43.32.1.1.7",
    name: "finSupplyMediaInputMediaDimXFeedDir",
    descr: "This object provides the value of the dimension across the feed direction of the media that is placed or will be placed in this input device"
}, {
    oid: "1.3.6.1.2.1.43.32.1.1.8",
    name: "finSupplyMediaInputStatus",
    descr: "This value indicates the current status of this input device"
}, {
    oid: "1.3.6.1.2.1.43.32.1.1.9",
    name: "finSupplyMediaInputMediaName",
    descr: "The name of the current media contained in this input device"
}, {
    oid: "1.3.6.1.2.1.43.32.1.1.10",
    name: "finSupplyMediaInputName",
    descr: "The name assigned to this input subunit"
}, {
    oid: "1.3.6.1.2.1.43.32.1.1.11",
    name: "finSupplyMediaInputDescription",
    descr: "A free form text description of this input subunit in the localization specified by prtGeneralCurrentLocalization"
}, {
    oid: "1.3.6.1.2.1.43.32.1.1.12",
    name: "finSupplyMediaInputSecurity",
    descr: "Indicates if this subunit has some security associated with it"
}, {
    oid: "1.3.6.1.2.1.43.32.1.1.13",
    name: "finSupplyMediaInputMediaWeight",
    descr: "The weight of the media associated with this Input device in grams per meter squared"
}, {
    oid: "1.3.6.1.2.1.43.32.1.1.14",
    name: "finSupplyMediaInputMediaThickness",
    descr: "This object identifies the thickness of the input media processed by this document input subunit measured in micrometers"
}, {
    oid: "1.3.6.1.2.1.43.32.1.1.15",
    name: "finSupplyMediaInputMediaType",
    descr: "The PWG Standardized Media Names specification [PWGMEDIA], section 3 Media Type Names, contains the recommended values for this object"
}, {
    oid: "1.3.6.1.2.1.43.33.1.1.1",
    name: "finDeviceAttributeTypeIndex",
    descr: "Defines the attribute type represented by this row"
}, {
    oid: "1.3.6.1.2.1.43.33.1.1.2",
    name: "finDeviceAttributeInstanceIndex",
    descr: "An index that allows the discrimination of an attribute instance when the same attribute occurs multiple times for a specific instance of a finisher function"
}, {
    oid: "1.3.6.1.2.1.43.33.1.1.3",
    name: "finDeviceAttributeValueAsInteger",
    descr: "Defines the integer value of the attribute"
}, {
    oid: "1.3.6.1.2.1.43.33.1.1.4",
    name: "finDeviceAttributeValueAsOctets",
    descr: "Contains the octet string value of the attribute"
}]