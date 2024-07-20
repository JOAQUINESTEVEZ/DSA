function count(coins, sum, n , dp){
    // Base case
    if (sum == 0){
        return dp[n][sum] = 1;
    }

    // If number of coins is 0 or sum negative, no solution
    if (n == 0 || sum < 0){
        return 0;
    }

    // Memoization
    if (dp[n][sum] != -1){
        return dep[n][sum];
    }

    return count(coins, sum, n - 1, dp) + count(coins, sum - coins[n - 1], n, dp);
}

let coins = [1, 2, 3];
let sum = 5;
let n = coins.length;

const dp = new Array(n + 1).fill().map(() => new Array(sum + 1).fill(-1));

const res = count(coins, sum, n, dp);

console.log(res);