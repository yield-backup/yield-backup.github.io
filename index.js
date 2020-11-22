const Contract = function () {
  const chefABI = JSON.parse(
    '[{"inputs":[{"internalType":"contract YieldToken","name":"_yield","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"uint256","name":"_yieldPerBlock","type":"uint256"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_bonusEndBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bonusEndBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"dev","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingYield","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accYieldPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"yield","outputs":[{"internalType":"contract YieldToken","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"yieldPerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]'
  );

  const tokenABI = JSON.parse(
    '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"symbol","type":"string"},{"name":"decimals","type":"uint8"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"from","type":"address"},{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"epoch","type":"uint256"},{"name":"supplyDelta","type":"int256"}],"name":"rebase","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"monetaryPolicy_","type":"address"}],"name":"setMonetaryPolicy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"monetaryPolicy","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"spender","type":"address"},{"name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"owner_","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"owner_","type":"address"},{"name":"spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"epoch","type":"uint256"},{"indexed":false,"name":"totalSupply","type":"uint256"}],"name":"LogRebase","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"monetaryPolicy","type":"address"}],"name":"LogMonetaryPolicyUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"}]'
  );

  const yieldABI = JSON.parse(
    '[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
  );

  const uniABI = JSON.parse(
    '[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
  );

  const factoryABI = JSON.parse(
    '[{"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token0","type":"address"},{"indexed":true,"internalType":"address","name":"token1","type":"address"},{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"PairCreated","type":"event"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allPairs","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allPairsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"createPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feeToSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeTo","type":"address"}],"name":"setFeeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"name":"setFeeToSetter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
  );

  let web3Node = new Web3(
      "wss://crimson-lively-smoke.quiknode.io/074aad3e-1e22-4ee7-aa5d-019cdebf2f95/b8xouKnQ9PmveM8YPYdDBMHm6cA7kSQ3xekrLrBkP8MTgWZN_H4olPpBwU7yE3FD0EwXQgRHLWzwB1NsykzUFA==/"
    );

  const chefAddress = '0xCBc03cC53a8C8D3563e5aeDD74a51C57c001fE4F';

  const yieldAddress = '0xE52d53c8C9aa7255F8c2FA9f7093FEa7192D2933';

  const factoryAddress = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f';

  const devAddress = '0x6dCEc67df23f57D2e7eAcCfDD0F5e2f938a7FEEF';

  const config = {
    "0x99986E1B28267338AF96B81201F5ed4D84f2d852": {
      tokenZero: "0x6768063279e2b185dc0c972b97f11f231d0b45ad",
      tokenOne: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0xaad22f5543fcdaa694b68f94be177b561836ae57": {
      tokenZero: "0x57ab1ec28d129707052df4df418d58a2d46d5f51",
      tokenOne: "0x68a118ef45063051eac49c7e647ce5ace48a68a5",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "0xf80758aB42C3B07dA84053Fd88804bCB6BAA4b5c",
      pricePairOne: "0x55111baD5bC368A2cb9ecc9FBC923296BeDb3b89",
    },
    "0x78d69745ba3549C3D6Bf03e95C8e9550381F2481": {
      tokenZero: "0x1453dbb8a29551ade11d89825ca812e05317eaeb",
      tokenOne: "0x6768063279e2b185dc0c972b97f11f231d0b45ad",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "0xcFB8CF118B4F0ABB2E8CE6DBEb90D6bC0A62693D",
      pricePairOne: "0x99986E1B28267338AF96B81201F5ed4D84f2d852",
    },
    "0x720bB526c5F9A2ca6C13AEE2E11daee1DD80abB0": {
      tokenZero: "0x6768063279e2b185dc0c972b97f11f231d0b45ad",
      tokenOne: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "0x99986E1B28267338AF96B81201F5ed4D84f2d852",
      pricePairOne: "0xCE84867c3c02B05dc570d0135103d3fB9CC19433",
    },
    "0x7835a44f91b9d196076cb2b38280bbc4bf237924": {
      tokenZero: "0x4b4701f3f827e1331fb22ff8e2beac24b17eb055",
      tokenOne: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0xd90a1ba0cbaaaabfdc6c814cdf1611306a26e1f8": {
      tokenZero: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenOne: "0xcc4304a31d09258b0029ea7fe63d032f52e44efe",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0xf49144e61c05120f1b167e4b4f59cf0a5d77903f": {
      tokenZero: "0x07597255910a51509ca469568b048f2597e72504",
      tokenOne: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0x59f96b8571e3b11f859a09eaf5a790a138fc64d0": {
      tokenZero: "0xa7de087329bfcda5639247f96140f9dabe3deed1",
      tokenOne: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0xe2f021411a15f677100a79f1bf6afd89d00c778b": {
      tokenZero: "0x10bae51262490b4f4af41e12ed52a0e744c1137a",
      tokenOne: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenZeroDecimals: "9",
      tokenOneDecimals: "18",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0xcb4f983e705caeb7217c5c3785001cb138115f0b": {
      tokenZero: "0xcb4f983e705caeb7217c5c3785001cb138115f0b",
      tokenOne: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0x6a3d23fa07c455f88d70c29d230467c407a3964b": {
      tokenZero: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenOne: "0xe17f017475a709de58e976081eb916081ff4c9d5",
      tokenZeroDecimals: "18",
      tokenOneDecimals: "9",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0x33906431e44553411b8668543ffc20aaa24f75f9": {
      tokenZero: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenOne: "0xc4c2614e694cf534d407ee49f8e44d125e4681c4",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0xd2e0c4928789e5db620e53af29f5fc7bca262635": {
      tokenZero: "0x6f87d756daf0503d08eb8993686c7fc01dc44fb1",
      tokenOne: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0xddf9b7a31b32ebaf5c064c80900046c9e5b7c65f": {
      tokenZero: "0x2ba592f78db6436527729929aaf6c908497cb200",
      tokenOne: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852": {
      tokenZero: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenOne: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      tokenZeroDecimals: "18",
      tokenOneDecimals: "6",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc": {
      tokenZero: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      tokenOne: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenZeroDecimals: "6",
      tokenOneDecimals: "18",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11": {
      tokenZero: "0x6b175474e89094c44da98b954eedeac495271d0f",
      tokenOne: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0x989ebc2b7e1e16f1ececd9a4fad931618c12ce36": {
      tokenZero: "0x9b9087756eca997c5d595c840263001c9a26646d",
      tokenOne: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0xC14182d9C0422541A765ae67863D60D1a3220c5A": {
      tokenZero: "0x7031ab87dcc46818806ec07af46fa8c2ad2a2bfc",
      tokenOne: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0xEC81c9eB83E464499b09b38510f967d97363745b": {
      tokenZero: "0x69692d3345010a207b759a7d1af6fc7f38b35c5e",
      tokenOne: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0x5D7C98C61f627568CB9027859fBa293b47f2127d": {
      tokenZero: "0x6768063279E2B185Dc0c972b97f11f231d0B45ad",
      tokenOne: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "0x99986E1B28267338AF96B81201F5ed4D84f2d852",
      pricePairOne: "0xd3d2e2692501a5c9ca623199d38826e513033a17",
    },
    "0x176483b962f132f093ad20d112fbc65c529d10ff": {
      tokenZero: "0xa883e72c12473ded50a5fbffa60e4000fa5fe3c8",
      tokenOne: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0xd3d2e2692501a5c9ca623199d38826e513033a17": {
      tokenZero: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      tokenOne: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: "",
    },
    "0x51FB69E687d63c242c03E94F5D770142cB304C8A": {
      tokenZero: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      tokenOne: "0xE52d53c8C9aa7255F8c2FA9f7093FEa7192D2933",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: ""
    },
    "0x7D611e4CF1C7B94561C4cAA5602F329d108336e3": {
      tokenZero: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      tokenOne: "0xed0439eacf4c4965ae4613d77a5c2efe10e5f183",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: ""
    },
    "0xB1A824a6Caf1f789Aa7ca1072E36E83Cd62bA3ee": {
      tokenZero: "0x0fF6ffcFDa92c53F615a4A75D982f399C989366b",
      tokenOne: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: ""
    },
    "0xd8C9b8a84946d3C96a322A02De96E04EE4354b4B": {
      tokenZero: "0x7D25d9f10Cd224EcCe0Bc824A2eC800Db81C01d7",
      tokenOne: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      tokenOneDecimals: "18",
      tokenZeroDecimals: "18",
      pricePairZero: "",
      pricePairOne: ""
    }
  };

  const memo = {};

  async function getETHPrice() {
    let priceVal = await getUniPrice({
      pool: "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc",
    });
    price =
      parseFloat(priceVal[0]) / 10 ** 6 / (parseFloat(priceVal[1]) / 1e18);
    price = price.toFixed(4);
    return price;
  }

  function getPair(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let factoryContract = new web3Node.eth.Contract(factoryABI, factoryAddress);
    return new Promise((resolve, reject) => {
      factoryContract.methods
        .getPair(obj.tokenZero, obj.tokenOne)
        .call(function (err, body) {
          if (!err) {
            resolve(body);
          } else {
            reject(err);
          }
        });
    });
  }

  function getTokenZero(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let uniPairContract = new web3Node.eth.Contract(uniABI, obj.pool);
    return new Promise((resolve, reject) => {
      uniPairContract.methods.token0().call(function (err, body) {
        if (!err) {
          resolve(body);
        } else {
          reject(err);
        }
      });
    });
  }

  function getTokenOne(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let uniPairContract = new web3Node.eth.Contract(uniABI, obj.pool);
    return new Promise((resolve, reject) => {
      uniPairContract.methods.token1().call(function (err, body) {
        if (!err) {
          resolve(body);
        } else {
          reject(err);
        }
      });
    });
  }

  function getUniBalances(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let tokenAddress = obj.tokenAddress;
    let tokenContract = new web3Node.eth.Contract(tokenABI, tokenAddress);
    return new Promise((resolve, reject) => {
      let now = new Date();
      let seconds = 15 * 1000;
      let cacheCutoff = new Date(now.getTime() - seconds);
      let compoundKey = `getUniBalances-${obj.tokenAddress}-${obj.pool}`;
      if (memo[compoundKey] && memo[compoundKey].timestamp > cacheCutoff) {
        resolve(memo[compoundKey].body);
      } else {
        tokenContract.methods.balanceOf(obj.pool).call(function (err, body) {
          if (!err) {
            memo[compoundKey] = {
              timestamp: new Date(),
              body: body,
            };
            resolve(body);
          } else {
            reject(err);
          }
        });
      }
    });
  }

  function getDecimals(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let tokenAddress = obj.tokenAddress;
    let tokenContract = new web3Node.eth.Contract(tokenABI, tokenAddress);
    return new Promise((resolve, reject) => {
      tokenContract.methods.decimals().call(function (err, body) {
        if (!err) {
          resolve(body);
        } else {
          reject(err);
        }
      });
    });
  }

  function getBalanceDev(obj) {
    let userAddress = "0xBd56E2bd74446a76cbDcFaE2BB9e14fb0C101459";
    return new Promise((resolve, reject) => {
      web3Node.eth.getBalance(userAddress, function (err, body) {
        if (!err) {
          resolve(body);
        } else {
          reject(err);
        }
      });
    });
  }

  function getTotalSupply(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let tokenAddress = obj.tokenAddress;
    let tokenContract = new web3Node.eth.Contract(tokenABI, tokenAddress);
    return new Promise((resolve, reject) => {
      let now = new Date();
      let seconds = 15 * 1000;
      let cacheCutoff = new Date(now.getTime() - seconds);
      let compoundKey = `getTotalSupply-${obj.tokenAddress}`;
      if (memo[compoundKey] && memo[compoundKey].timestamp > cacheCutoff) {
        resolve(memo[compoundKey].body);
      } else {
        tokenContract.methods.totalSupply().call(function (err, body) {
          if (!err) {
            memo[compoundKey] = {
              timestamp: new Date(),
              body: body,
            };
            resolve(body);
          } else {
            reject(err);
          }
        });
      }
    });
  }

  function getTokenBalance(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let tokenAddress = obj.tokenAddress;
    let tokenContract = new web3Node.eth.Contract(tokenABI, tokenAddress);
    return new Promise((resolve, reject) => {
      tokenContract.methods.balanceOf(obj.from).call(function (err, body) {
        if (!err) {
          resolve(body);
        } else {
          reject(err);
        }
      });
    });
  }

  async function convertLPFees(obj) {
    let pool = obj.pool;
    let liquidity = await getTokenBalance({
      from: devAddress,
      tokenAddress: pool,
    });
    let totalSupplyOfLP = await getTotalSupply({ tokenAddress: pool });
    let tokenZero = config[pool]["tokenZero"];
    let tokenOne = config[pool]["tokenOne"];
    let balanceZero = await getUniBalances({
      pool: pool,
      tokenAddress: tokenZero,
    });
    let balanceOne = await getUniBalances({
      pool: pool,
      tokenAddress: tokenOne,
    });
    let amountZero = new BigNumber(liquidity)
      .multipliedBy(balanceZero)
      .div(totalSupplyOfLP);
    let amountOne = new BigNumber(liquidity)
      .multipliedBy(balanceOne)
      .div(totalSupplyOfLP);
    let priceOne, priceZero, pricePool, priceVal, decimals;
    let uni = {};
    if (
      tokenZero.toLowerCase() !==
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" &&
      tokenOne.toLowerCase() === "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
    ) {
      priceVal = await getUniPrice({ pool: pool });
      decimals = config[pool]["tokenZeroDecimals"];
      decimals = parseFloat(decimals);
      priceZero =
        parseFloat(priceVal[0]) /
        10 ** decimals /
        (parseFloat(priceVal[1]) / 1e18);
      priceOne = 1;
      uni["balanceZero"] = amountZero / 10 ** decimals;
      uni["balanceOne"] = amountOne / 1e18;
      uni["priceZero"] = priceZero;
      uni["priceOne"] = priceOne;
    } else if (
      tokenZero.toLowerCase() ===
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" &&
      tokenOne.toLowerCase() !== "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
    ) {
      priceZero = 1;
      priceVal = await getUniPrice({ pool: pool });
      decimals = config[pool]["tokenOneDecimals"];
      decimals = parseFloat(decimals);
      priceOne =
        parseFloat(priceVal[1]) /
        10 ** decimals /
        (parseFloat(priceVal[0]) / 1e18);
      uni["balanceZero"] = amountZero / 1e18;
      uni["balanceOne"] = amountOne / 10 ** decimals;
      uni["priceZero"] = priceZero;
      uni["priceOne"] = priceOne;
    } else if (
      tokenOne.toLowerCase() !== "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" &&
      tokenZero.toLowerCase() !== "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
    ) {
      let pricePoolOne = config[pool]["pricePairZero"];
      let pricePoolTwo = config[pool]["pricePairOne"];
      let priceVal_1 = await getUniPrice({ pool: pricePoolOne });
      let priceVal_2 = await getUniPrice({ pool: pricePoolTwo });
      priceZero = parseFloat(priceVal_1[0]) / parseFloat(priceVal_1[1]);
      priceOne = parseFloat(priceVal_2[0]) / parseFloat(priceVal_2[1]);
      let decimals_0 = config[pool]["tokenZeroDecimals"];
      decimals_0 = parseFloat(decimals_0);
      let decimals_1 = config[pool]["tokenOneDecimals"];
      decimals_1 = parseFloat(decimals_1);
      uni["balanceZero"] = amountZero / 10 ** decimals_0;
      uni["balanceOne"] = amountOne / 10 ** decimals_1;
      uni["priceZero"] = priceZero;
      uni["priceOne"] = priceOne;
    }
    return uni;
  }

  async function convertLP(obj) {
    let pool = obj.pool;
    let liquidity = await getTokenBalance({
      from: chefAddress,
      tokenAddress: pool,
    });
    let totalSupplyOfLP = await getTotalSupply({ tokenAddress: pool });
    let tokenZero = config[pool]["tokenZero"];
    let tokenOne = config[pool]["tokenOne"];
    let balanceZero = await getUniBalances({
      pool: pool,
      tokenAddress: tokenZero,
    });
    let balanceOne = await getUniBalances({
      pool: pool,
      tokenAddress: tokenOne,
    });
    let amountZero = new BigNumber(liquidity)
      .multipliedBy(balanceZero)
      .div(totalSupplyOfLP);
    let amountOne = new BigNumber(liquidity)
      .multipliedBy(balanceOne)
      .div(totalSupplyOfLP);
    let priceOne, priceZero, pricePool, priceVal, decimals;
    let uni = {};
    if (
      tokenZero.toLowerCase() !==
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" &&
      tokenOne.toLowerCase() === "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
    ) {
      priceVal = await getUniPrice({ pool: pool });
      decimals = config[pool]["tokenZeroDecimals"];
      decimals = parseFloat(decimals);
      priceZero =
        parseFloat(priceVal[0]) /
        10 ** decimals /
        (parseFloat(priceVal[1]) / 1e18);
      priceOne = 1;
      uni["balanceZero"] = amountZero / 10 ** decimals;
      uni["balanceOne"] = amountOne / 1e18;
      uni["priceZero"] = priceZero;
      uni["priceOne"] = priceOne;
    } else if (
      tokenZero.toLowerCase() ===
        "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" &&
      tokenOne.toLowerCase() !== "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
    ) {
      priceZero = 1;
      priceVal = await getUniPrice({ pool: pool });
      decimals = config[pool]["tokenOneDecimals"];
      decimals = parseFloat(decimals);
      priceOne =
        parseFloat(priceVal[1]) /
        10 ** decimals /
        (parseFloat(priceVal[0]) / 1e18);
      uni["balanceZero"] = amountZero / 1e18;
      uni["balanceOne"] = amountOne / 10 ** decimals;
      uni["priceZero"] = priceZero;
      uni["priceOne"] = priceOne;
    } else if (
      tokenOne.toLowerCase() !== "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" &&
      tokenZero.toLowerCase() !== "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
    ) {
      let pricePoolOne = config[pool]["pricePairZero"];
      let pricePoolTwo = config[pool]["pricePairOne"];
      let priceVal_1 = await getUniPrice({ pool: pricePoolOne });
      let priceVal_2 = await getUniPrice({ pool: pricePoolTwo });
      priceZero = parseFloat(priceVal_1[0]) / parseFloat(priceVal_1[1]);
      priceOne = parseFloat(priceVal_2[0]) / parseFloat(priceVal_2[1]);
      let decimals_0 = config[pool]["tokenZeroDecimals"];
      decimals_0 = parseFloat(decimals_0);
      let decimals_1 = config[pool]["tokenOneDecimals"];
      decimals_1 = parseFloat(decimals_1);
      uni["balanceZero"] = amountZero / 10 ** decimals_0;
      uni["balanceOne"] = amountOne / 10 ** decimals_1;
      uni["priceZero"] = priceZero;
      uni["priceOne"] = priceOne;
    }
    return uni;
  }

  function getUniPrice(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let yieldPoolContract = new web3Node.eth.Contract(yieldABI, obj.pool);
    return new Promise((resolve, reject) => {
      let now = new Date();
      let seconds = 15 * 1000;
      let cacheCutoff = new Date(now.getTime() - seconds);
      let compoundKey = `getUniPrice-${obj.pool}`;
      if (memo[compoundKey] && memo[compoundKey].timestamp > cacheCutoff) {
        resolve(memo[compoundKey].body);
      } else {
        yieldPoolContract.methods.getReserves().call(function (err, body) {
          if (!err) {
            memo[compoundKey] = {
              timestamp: new Date(),
              body: body,
            };
            resolve(body);
          } else {
            reject(err);
          }
        });
      }
    });
  }

  function getPoolInfo(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let yieldContract = new web3Node.eth.Contract(chefABI, chefAddress);
    return new Promise((resolve, reject) => {
      let now = new Date();
      let seconds = 15 * 1000;
      let cacheCutoff = new Date(now.getTime() - seconds);
      let compoundKey = `getPoolInfo-${obj.id}`;
      if (memo[compoundKey] && memo[compoundKey].timestamp > cacheCutoff) {
        resolve(memo[compoundKey].body);
      } else {
        yieldContract.methods.poolInfo(obj.id).call(function (err, body) {
          if (!err) {
            memo[compoundKey] = {
              timestamp: new Date(),
              body: body,
            };
            resolve(body);
          } else {
            reject(err);
          }
        });
      }
    });
  }

  function stakeBalance(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let yieldContract = new web3Node.eth.Contract(chefABI, chefAddress);
    return new Promise((resolve, reject) => {
      yieldContract.methods
        .userInfo(obj.id)
        .call(userAddress, function (err, body) {
          if (!err) {
            resolve(body[0]);
          } else {
            reject(err);
          }
        });
    });
  }

  function withdraw(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let yieldContract = new web3Node.eth.Contract(chefABI, chefAddress);
    return new Promise((resolve, reject) => {
      yieldContract.methods
        .withdraw(obj.id, obj.amount)
        .call(function (err, body) {
          if (!err) {
            resolve(body);
          } else {
            reject(err);
          }
        });
    });
  }

  function deposit(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let yieldContract = new web3Node.eth.Contract(chefABI, chefAddress);
    return new Promise((resolve, reject) => {
      yieldContract.methods
        .deposit(obj.id, obj.amount)
        .call(function (err, body) {
          if (!err) {
            resolve(body);
          } else {
            reject(err);
          }
        });
    });
  }

  function pendingYield(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let yieldContract = new web3Node.eth.Contract(chefABI, chefAddress);
    return new Promise((resolve, reject) => {
      yieldContract.methods
        .pendingYield(obj.id, userAddress)
        .call(function (err, body) {
          if (!err) {
            resolve(body);
          } else {
            reject(err);
          }
        });
    });
  }

  function balanceOfChef(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let tokenAddress = obj.tokenAddress;
    let tokenContract = new web3Node.eth.Contract(tokenABI, tokenAddress);
    return new Promise((resolve, reject) => {
      tokenContract.methods.balanceOf(chefAddress).call(function (err, body) {
        if (!err) {
          resolve(body);
        } else {
          reject(err);
        }
      });
    });
  }

  function balanceOfYield(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let tokenAddress = yieldAddress;
    let tokenContract = new web3Node.eth.Contract(tokenABI, tokenAddress);
    return new Promise((resolve, reject) => {
      tokenContract.methods.balanceOf(userAddress).call(function (err, body) {
        if (!err) {
          resolve(body);
        } else {
          reject(err);
        }
      });
    });
  }

  function balanceOf(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let tokenAddress = obj.tokenAddress;
    let tokenContract = new web3Node.eth.Contract(tokenABI, tokenAddress);
    return new Promise((resolve, reject) => {
      tokenContract.methods.balanceOf(userAddress).call(function (err, body) {
        if (!err) {
          resolve(body);
        } else {
          reject(err);
        }
      });
    });
  }

  function totalSupply(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let tokenAddress = obj.tokenAddress;
    let tokenContract = new web3Node.eth.Contract(tokenABI, tokenAddress);
    return new Promise((resolve, reject) => {
      tokenContract.methods.totalSupply().call(function (err, body) {
        if (!err) {
          resolve(body);
        } else {
          reject(err);
        }
      });
    });
  }

  function allowance(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let tokenAddress = obj.tokenAddress;
    let tokenContract = new web3Node.eth.Contract(tokenABI, tokenAddress);
    return new Promise((resolve, reject) => {
      tokenContract.methods
        .allowance(userAddress, chefAddress)
        .call(function (err, body) {
          if (!err) {
            resolve(body);
          } else {
            reject(err);
          }
        });
    });
  }

  function approve(obj) {
    let userAddress = localStorage.getItem("userAddress");
    let tokenAddress = obj.tokenAddress;
    let tokenContract = new web3Node.eth.Contract(tokenABI, tokenAddress);
    return new Promise((resolve, reject) => {
      tokenContract.methods.approve(chefAddress, -1, function (err, body) {
        if (!err) {
          resolve(body);
        } else {
          reject(err);
        }
      });
    });
  }

  return {
    getBalanceDev,
    devAddress,
    convertLPFees,
    getETHPrice,
    getTotalSupply,
    convertLP,
    getUniPrice,
    getPoolInfo,
    balanceOfChef,
    withdraw,
    deposit,
    stakeBalance,
    pendingYield,
    balanceOfYield,
    balanceOf,
    approve,
    allowance,
    totalSupply,
  };
};

$(window).on("load", async function (e) {
  const totalPoints = 3205;

  let contract_ = new Contract();

  let metamaskText = $("#metamask");
  let metamaskEnabled;

  setInterval(async function () {
    await updateTokenStaked();
  }, 3000);

  async function getLPTokenValues(obj) {
    let pool = obj.pool;
    try {
      let values = await contract_.convertLP({ pool: pool });
      let priceZero = parseFloat(values.priceZero);
      let priceOne = parseFloat(values.priceOne);
      let balanceZero = parseFloat(values.balanceZero);
      let balanceOne = parseFloat(values.balanceOne);
      let total =
        (1 / parseFloat(priceZero)) * parseFloat(balanceZero) +
        (1 / parseFloat(priceOne)) * parseFloat(balanceOne);
      return total.toFixed(8);
    } catch(err) {
        return 0;
    }
  }

  async function getLPTokenFeesValues(obj) {
    let pool = obj.pool;
    try {
      let values = await contract_.convertLPFees({ pool: pool });
      let priceZero = parseFloat(values.priceZero);
      let priceOne = parseFloat(values.priceOne);
      let balanceZero = parseFloat(values.balanceZero);
      let balanceOne = parseFloat(values.balanceOne);
      let total =
        (1 / parseFloat(priceZero)) * parseFloat(balanceZero) +
        (1 / parseFloat(priceOne)) * parseFloat(balanceOne);
      return total.toFixed(8);
    } catch(err) {
        return 0;
    }
  }

  async function updateTokenStaked() {
    let yieldPool = await contract_.getUniPrice({
      pool: "0x51FB69E687d63c242c03E94F5D770142cB304C8A",
    });
    let price = new BigNumber(yieldPool["0"]).div(yieldPool["1"]);
    let ethPrice = await contract_.getETHPrice();
    ethPrice = parseFloat(ethPrice);
    let yieldSupply = await contract_.getTotalSupply({
      tokenAddress: "0xE52d53c8C9aa7255F8c2FA9f7093FEa7192D2933",
    });
    yieldSupply = new BigNumber(yieldSupply).div(1e18).toFixed();
    let marketcap = price.multipliedBy(yieldSupply).multipliedBy(ethPrice);
    let totalLocked = 0;
    let el = $("div[params]");
    let el_arr = [];
    let feeValue = 0;
    for (let i = 0; i < el.length; i++) {
      let params = $(el[i]).attr("params");
      params = JSON.parse(params);
      let _id = params["id"];
      let apyEl = $($(el[i]).find("#apy")[0]);
      let lockedEl = $($(el[i]).find("#lockedValue")[0]);
      let token = params["token"];
      let value = await getLPTokenValues({ pool: token });;
      let uniFeeValues = await getLPTokenFeesValues({ pool: token });
      uniFeeValues = parseFloat(uniFeeValues);
      feeValue += uniFeeValues;
      let poolInfo = await contract_.getPoolInfo({ id: _id });
      let points = parseFloat(poolInfo[1]);
      let perBlockMint = parseFloat(price) * 10 * (points / totalPoints);
      let mintPerYear = perBlockMint * 276 * 24 * 365;
      let rate = (1 / parseFloat(value)) * mintPerYear;
      let rate_eth = (rate * 100).toFixed(4);
      let lockedText =
        parseFloat(value) === 0
          ? "NEW POOL"
          : parseFloat(value).toFixed(2) + " ETH";
      let apyText =
        parseFloat(value) === 0 ? "NEW POOL" : rate_eth.toString() + " %";
      totalLocked += parseFloat(value);
      el_arr.push({
        element: [lockedEl, apyEl],
        locked: lockedText,
        apy: apyText,
      });
    }
    for (let i = 0; i < el.length; i++) {
      let elements = el_arr[i]["element"];
      let el = elements[0];
      let el_1 = elements[1];
      el.text(el_arr[i]["locked"]);
      el_1.text(el_arr[i]["apy"]);
    }
    feeValue *= ethPrice;
    $('#buyBack').text(feeValue.toFixed(2) + " USD");
    $(".marketcap").text(parseFloat(marketcap).toFixed(2) + " USD");
    totalLocked *= ethPrice;
    totalLocked = parseFloat(totalLocked).toFixed(2);
    $(".totalValueLocked").text(totalLocked + " USD");
  }
  // so we start loading everything as soon as the page loads
  updateTokenStaked();
});
