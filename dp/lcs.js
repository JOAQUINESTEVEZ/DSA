function lcs(X, Y, m, n, dp){
    // If strings are empty
    if(m == 0 || n == 0){
        return 0;
    }

    // If they match
    if (X[m - 1] == Y[n - 1]){
        return 1 + lcs(X, Y, m - 1, n - 1, dp);
    }

    // Memoization
    if (dp[m][n] != -1){
        return dp[m][n];
    }

    return Math.max(lcs(X, Y, m - 1, n, dp), lcs(X, Y, m, n-1, dp));
}

function getLCS(X, Y, m, n, dp) {
    let i = m, j = n;
    let lcsStr = "";

    while (i > 0 && j > 0) {
        if (X[i - 1] == Y[j - 1]) {
            lcsStr = X[i - 1] + lcsStr;  // Add this character to the result
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            i--;
        } else {
            j--;
        }
    }

    return lcsStr;
}

let X = "AGGTAB";
let Y = "GXTXAYB";

let m = X.length;
let n = Y.length;

const dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(-1));

const res = lcs(X, Y, m, n, dp);

const lcsSubsequence = getLCS(X, Y, m, n, dp);

console.log(res);
console.log(lcsSubsequence);