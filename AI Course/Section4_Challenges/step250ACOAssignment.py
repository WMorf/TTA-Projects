import numpy as np

distance_matrix = np.array([
    [0, 2, 4, 3, 5],
    [2, 0, 6, 7, 8],
    [4, 6, 0, 1, 3],
    [3, 7, 1, 0, 2],
    [5, 8, 3, 2, 0]
])

num_cities = distance_matrix.shape[0]

num_ants = 10

def ant_colony_optimization(num_iterations):
    pheromone_level = np.ones((num_cities, num_cities))

    heuristic_info = 1 / (distance_matrix + np.finfo(float).eps) #Avoid division by zero
    
    alpha = 1.0 # Pheromone importance
    beta = 2.0 # Heuristic importance

    best_distance = float('inf')
    best_path = []

    for iteration in range(num_iterations):
        ant_paths = np.zeros((num_ants, num_cities), dtype=int)
        ant_distances = np.zeros(num_ants)

        for ant in range(num_ants):
            current_city = np.random.randint(num_cities) # Choose random starting city
            visited = [current_city]

            for _ in range(num_cities - 1): # Construct the path
                selection_probs = (pheromone_level[current_city] ** alpha) * (heuristic_info[current_city] ** beta)
                selection_probs[np.array(visited)] = 0

                # Choose next city based on selection probabilities
                next_city= np.random.choice(np.arange(num_cities), p=(selection_probs / np.sum(selection_probs)))

                # Update the path and visited list
                ant_paths[ant, _+1] = next_city
                #print(ant_paths)
                visited.append(next_city)

                # Update the distance
                ant_distances[ant] += distance_matrix[current_city, next_city]

                # Update the current city
                current_city = next_city
            
            # Update the distance to return to the starting city
            ant_distances[ant] += distance_matrix[current_city, ant_paths[ant, 0]]

        # Update the pheromone level based on the ant paths
        pheromone_level *= 0.5 # Evaporation
        for ant in range(num_ants):
            for city in range(num_cities - 1):
                pheromone_level[ant_paths[ant,city], ant_paths[ant, city+1]] += 1 / ant_distances[ant]
            pheromone_level[ant_paths[ant,city], ant_paths[ant, 0]] += 1 / ant_distances[ant]

        
        # Update the best path and distance if a better solution is found
        min_distance_idx = np.argmin(ant_distances)
        if ant_distances[min_distance_idx] < best_distance:
            best_distance = ant_distances[min_distance_idx]
            best_path = ant_paths[min_distance_idx]
    
    return best_path, best_distance

num_iterations = 100
best_path, best_distance = ant_colony_optimization(num_iterations)

print("Here is the best path:", best_path)
print("Here is the best distance:", best_distance)