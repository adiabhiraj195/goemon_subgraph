import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { IntentCanceled } from "../generated/schema"
import { IntentCanceled as IntentCanceledEvent } from "../generated/Goemon/Goemon"
import { handleIntentCanceled } from "../src/goemon"
import { createIntentCanceledEvent } from "./goemon-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let intentIndex = BigInt.fromI32(234)
    let newIntentCanceledEvent = createIntentCanceledEvent(user, intentIndex)
    handleIntentCanceled(newIntentCanceledEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("IntentCanceled created and stored", () => {
    assert.entityCount("IntentCanceled", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "IntentCanceled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "IntentCanceled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "intentIndex",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
