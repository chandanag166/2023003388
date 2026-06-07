# Stage 1

## Problem
Users receive many notifications and may miss important ones.

## Priority Order
1. Placement
2. Result
3. Event

## Approach
- Fetch notifications from API.
- Assign priority weights:
  - Placement = 3
  - Result = 2
  - Event = 1
- Sort by priority.
- For same priority, sort by latest timestamp.
- Return Top 10 notifications.

## Complexity
Time Complexity: O(N log N)
Space Complexity: O(N)

## Future Optimization
Use a Max Heap (Priority Queue).
When a new notification arrives:
- Insert notification into heap.
- Remove lowest priority item if heap size exceeds 10.

Update Complexity: O(log N)