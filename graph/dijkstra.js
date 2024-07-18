const INF = 2147483647;

// This class represents a directed graph using
// adjacency list representation
class Graph {

    constructor(V) {
        // No. of vertices
        this.V = V;

        // In a weighted graph, we need to store vertex
        // and weight pair for every edge
        this.adj = new Array(V);
        for (let i = 0; i < V; i++) {
            this.adj[i] = new Array();
        }
    }

    addEdge(u, v, w) {
        this.adj[u].push([v, w]);
        this.adj[v].push([u, w]);
    }

    // Prints shortest paths from src to all other vertices
    shortestPath(src){
        // initialize arrays
        let pq = [];
        let dist = new Array(this.V).fill(INF);
        let prev = new Array(this.V).fill(null);

        // set src vertex and distance
        dist[src] = 0;
        pq.push([0, src]);

        while (pq.length !== 0){
            // get the vertex with minimum distance
            const u = pq[0][1];
            dist[u] = pq[0][0];
            pq.shift();

            // iterate through u's adjacent vertexs
            for(let i = 0; i < this.adj[u].length; i++){
                // get ajacent vertex and weight
                const v = this.adj[u][i][0];
                const w = this.adj[u][i][1];

                // check if distance is lower
                if (dist[v] > dist[u] + w){
                    // update distance
                    dist[v] = dist[u] + w;

                    // push to priority queue
                    pq.push([dist[v], v]);

                    // update prev array
                    prev[v] = u;
                }
            }
        }

        // Print shortest distances stored in dist[]
        console.log("Vertex Distance from Source");
        for (let i = 0; i < this.V; ++i)
            console.log(i, "        ", dist[i]);

        // Print paths
        console.log("Paths from source to each vertex:");
        for (let i = 0; i < this.V; ++i) {
            console.log(`Path to vertex ${i}: ${this.getPath(prev, i).join(' -> ')}`);
        }
    }

    getPath(prev, target){
        let path = [];

        for (let at = target; prev[at] !== null; at = prev[at]){
            path.push(at);
        }
        return path.reverse();
    }

}

// Driver's code
// create the graph given in above figure
let V = 9;
let g = new Graph(V);

// making above shown graph
g.addEdge(0, 1, 4);
g.addEdge(0, 7, 8);
g.addEdge(1, 2, 8);
g.addEdge(1, 7, 11);
g.addEdge(2, 3, 7);
g.addEdge(2, 8, 2);
g.addEdge(2, 5, 4);
g.addEdge(3, 4, 9);
g.addEdge(3, 5, 14);
g.addEdge(4, 5, 10);
g.addEdge(5, 6, 2);
g.addEdge(6, 7, 1);
g.addEdge(6, 8, 6);
g.addEdge(7, 8, 7);

// Function call
g.shortestPath(0);
