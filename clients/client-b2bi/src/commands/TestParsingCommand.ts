// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { B2biClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../B2biClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { TestParsingRequest, TestParsingResponse } from "../models/models_0";
import { de_TestParsingCommand, se_TestParsingCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TestParsingCommand}.
 */
export interface TestParsingCommandInput extends TestParsingRequest {}
/**
 * @public
 *
 * The output of {@link TestParsingCommand}.
 */
export interface TestParsingCommandOutput extends TestParsingResponse, __MetadataBearer {}

/**
 * <p>Parses the input EDI (electronic data interchange) file. The input file has a file size limit of 250 KB.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { B2biClient, TestParsingCommand } from "@aws-sdk/client-b2bi"; // ES Modules import
 * // const { B2biClient, TestParsingCommand } = require("@aws-sdk/client-b2bi"); // CommonJS import
 * const client = new B2biClient(config);
 * const input = { // TestParsingRequest
 *   inputFile: { // S3Location
 *     bucketName: "STRING_VALUE",
 *     key: "STRING_VALUE",
 *   },
 *   fileFormat: "XML" || "JSON" || "NOT_USED", // required
 *   ediType: { // EdiType Union: only one key present
 *     x12Details: { // X12Details
 *       transactionSet: "X12_110" || "X12_180" || "X12_204" || "X12_210" || "X12_211" || "X12_214" || "X12_215" || "X12_259" || "X12_260" || "X12_266" || "X12_269" || "X12_270" || "X12_271" || "X12_274" || "X12_275" || "X12_276" || "X12_277" || "X12_278" || "X12_310" || "X12_315" || "X12_322" || "X12_404" || "X12_410" || "X12_417" || "X12_421" || "X12_426" || "X12_810" || "X12_820" || "X12_824" || "X12_830" || "X12_832" || "X12_834" || "X12_835" || "X12_837" || "X12_844" || "X12_846" || "X12_849" || "X12_850" || "X12_852" || "X12_855" || "X12_856" || "X12_860" || "X12_861" || "X12_864" || "X12_865" || "X12_869" || "X12_870" || "X12_940" || "X12_945" || "X12_990" || "X12_997" || "X12_999" || "X12_270_X279" || "X12_271_X279" || "X12_275_X210" || "X12_275_X211" || "X12_276_X212" || "X12_277_X212" || "X12_277_X214" || "X12_277_X364" || "X12_278_X217" || "X12_820_X218" || "X12_820_X306" || "X12_824_X186" || "X12_834_X220" || "X12_834_X307" || "X12_834_X318" || "X12_835_X221" || "X12_837_X222" || "X12_837_X223" || "X12_837_X224" || "X12_837_X291" || "X12_837_X292" || "X12_837_X298" || "X12_999_X231",
 *       version: "VERSION_4010" || "VERSION_4030" || "VERSION_5010" || "VERSION_5010_HIPAA",
 *     },
 *   },
 * };
 * const command = new TestParsingCommand(input);
 * const response = await client.send(command);
 * // { // TestParsingResponse
 * //   parsedFileContent: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param TestParsingCommandInput - {@link TestParsingCommandInput}
 * @returns {@link TestParsingCommandOutput}
 * @see {@link TestParsingCommandInput} for command's `input` shape.
 * @see {@link TestParsingCommandOutput} for command's `response` shape.
 * @see {@link B2biClientResolvedConfig | config} for B2biClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web Services B2B Data Interchange service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Occurs when the requested resource does not exist, or cannot be found. In some cases, the resource exists in a region other than the region specified in the API call.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling: the data speed and rendering may be limited depending on various parameters and conditions.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Occurs when a B2BI object cannot be validated against a request from another object.</p>
 *
 * @throws {@link B2biServiceException}
 * <p>Base exception class for all service exceptions from B2bi service.</p>
 *
 * @public
 * @example Sample TestParsing call
 * ```javascript
 * //
 * const input = {
 *   "ediType": {
 *     "x12Details": {
 *       "version": "VERSION_4010",
 *       "transactionSet": "X12_110"
 *     }
 *   },
 *   "fileFormat": "JSON",
 *   "inputFile": {
 *     "key": "sampleFile.txt",
 *     "bucketName": "test-bucket"
 *   }
 * };
 * const command = new TestParsingCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "parsedFileContent": "Sample parsed file content"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class TestParsingCommand extends $Command
  .classBuilder<
    TestParsingCommandInput,
    TestParsingCommandOutput,
    B2biClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: B2biClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("B2BI", "TestParsing", {})
  .n("B2biClient", "TestParsingCommand")
  .f(void 0, void 0)
  .ser(se_TestParsingCommand)
  .de(de_TestParsingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TestParsingRequest;
      output: TestParsingResponse;
    };
    sdk: {
      input: TestParsingCommandInput;
      output: TestParsingCommandOutput;
    };
  };
}
