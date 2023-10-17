# Asymmetry Finance afETH - Mitigation Review details
- Total Prize Pool: $7,150 USDC 
- [Warden guidelines for C4 mitigation reviews](https://code4rena.notion.site/Guidelines-for-C4-mitigation-reviews-ed10fc5cfbf640bd8dcec66f38b343c4)
- Submit findings [using the C4 form](https://code4rena.com/contests/2023-10-asymmetry-finance-afeth-mitigation-review/submit)
- Starts October 20, 2023 20:00 UTC 
- Ends October 25, 2023 20:00 UTC 

## Important note 

Each warden must submit a mitigation review for *every High and Medium finding* from the parent audit that is listed as in-scope for the mitigation review. **Incomplete mitigation reviews will not be eligible for awards.**

## Findings being mitigated

Mitigations of all High and Medium issues will be considered in-scope and listed here.

- [H-01: Intrinsic arbitrage from price discrepancy](https://github.com/code-423n4/2023-09-asymmetry-findings/issues/62)
- [H-02: Zero amount withdrawals of SafEth or Votium will brick the withdraw process](https://github.com/code-423n4/2023-09-asymmetry-findings/issues/36)
- [H-03: AfEth deposits could use price data from an invalid Chainlink response](https://github.com/code-423n4/2023-09-asymmetry-findings/issues/34)
- [H-04: price() in AfEth.sol doesn't take afEth held for pending withdrawals into account](https://github.com/code-423n4/2023-09-asymmetry-findings/issues/25)
- [H-05: Functions in the VotiumStrategy contract are susceptible to sandwich attacks](https://github.com/code-423n4/2023-09-asymmetry-findings/issues/23)
- [M-01: AfEth collaterals cannot be balanced after ratio is changed](https://github.com/code-423n4/2023-09-asymmetry-findings/issues/55)
- [M-02: Swap functionality to sell rewards is too permissive and could cause accidental or intentional loss of value](https://github.com/code-423n4/2023-09-asymmetry-findings/issues/54)
- [M-03: Forced relock in VotiumStrategy withdrawal causes denial of service if Convex locking contract is shutdown](https://github.com/code-423n4/2023-09-asymmetry-findings/issues/50)
- [M-04: VotiumStrategy withdrawal queue fails to consider available unlocked tokens causing different issues in the withdraw process](https://github.com/code-423n4/2023-09-asymmetry-findings/issues/49)
- [M-05: Reward sandwiching in VotiumStrategy](https://github.com/code-423n4/2023-09-asymmetry-findings/issues/45)
- [M-06: Missing deadline check for AfEth actions](https://github.com/code-423n4/2023-09-asymmetry-findings/issues/43)
- [M-07: Lack of access control and value validation in the reward flow exposes functions to public access](https://github.com/code-423n4/2023-09-asymmetry-findings/issues/38)
- [M-08: Inflation attack in VotiumStrategy](https://github.com/code-423n4/2023-09-asymmetry-findings/issues/35)
- [M-09: Missing circuit breaker checks in ethPerCvx() for Chainlink's price feed](https://github.com/code-423n4/2023-09-asymmetry-findings/issues/31)
- [M-10: It might not be possible to applyRewards(), if an amount received is less than 0.05 eth](https://github.com/code-423n4/2023-09-asymmetry-findings/issues/16)

## Overview of changes

Most of the changes felt relatively straight forward.  The biggest change we did was not burning afEth on withdraw, instead we now burn it on requestWithdraw.  This is mostly in regards to H-04, but would like to have extra care taken around that to make sure nothing is broken.

## Mitigations to be reviewed

### Branch
[All audit mitigations](https://github.com/asymmetryfinance/afeth/pull/167)

### Individual PRs
Wherever possible, mitigations should be provided in separate pull requests, one per issue. If that is not possible (e.g. because several audit findings stem from the same core problem), then please link the PR to all relevant issues in your findings repo. 

| URL | Mitigation of | Purpose | 
| ----------- | ------------- | ----------- |
| https://github.com/code-423n4/2023-09-asymmetry-findings/issues/62 | H-01 | After days of research we decided that this was acceptable.  Check the link to view our response. | 
| https://github.com/asymmetryfinance/afeth/pull/159 | H-02 | Don't withdraw zero from SafEth or Votium |
| https://github.com/asymmetryfinance/afeth/pull/165 | H-03 | Validate Chainlink price data |
| https://github.com/asymmetryfinance/afeth/pull/162 & https://github.com/asymmetryfinance/afeth/pull/172 | H-04 | For this one we made afEth just burn on requestWithdraw |
| https://github.com/asymmetryfinance/afeth/pull/176 & https://github.com/asymmetryfinance/afeth/pull/178 & https://github.com/asymmetryfinance/afeth/pull/169 | H-05 | For this one we locked down the depositRewards function and added a minout to the reward functions  |
| https://github.com/code-423n4/2023-09-asymmetry-findings/issues/55 | M-01 | Acknowledged and did not fix, plan to upgrade a fix in the future |
| https://github.com/code-423n4/2023-09-asymmetry-findings/issues/54 | M-02 | Did not fix, should have been marked acknowledged |
| https://github.com/asymmetryfinance/afeth/pull/164 | M-03 | Check if vlcvx contract is shutdown before trying to relock |
| https://github.com/asymmetryfinance/afeth/pull/168 | M-04 | Check if available amount to withdraw is already in contract  |
| https://github.com/asymmetryfinance/afeth/pull/168 | M-05 | Add a minimum epoch of 1 to not allow users to immediately withdraw |
| https://github.com/asymmetryfinance/afeth/pull/175 | M-06 | Add a deadline check for deposit & withdraw |
| https://github.com/asymmetryfinance/afeth/pull/193 & https://github.com/asymmetryfinance/afeth/pull/190 | M-07 | Here we did two things, check msg.value instead of passing in amount & make deposit rewards private |
| https://github.com/asymmetryfinance/afeth/pull/179 | M-08 | Track balances instead of using balanceOf |
| https://github.com/code-423n4/2023-09-asymmetry-findings/issues/31 | M-09 | Didn't fix, should have been marked acknowledged |
| https://github.com/code-423n4/2023-09-asymmetry-findings/issues/16 | M-10 | No code changes needed, we removed the minimum stake amount from SafEth |




## Out of Scope

Please list any High and Medium issues that were judged as valid but you have chosen not to fix.
