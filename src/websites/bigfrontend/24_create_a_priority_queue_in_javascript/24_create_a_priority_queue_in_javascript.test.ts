import { describe, it, expect } from "vitest";
import { PriorityQueue } from "./24_create_a_priority_queue_in_javascript";

describe("PriorityQueue tests", function () {
  it("should pass the first test", function () {
    const priorityQueue = new PriorityQueue((a: number, b: number) => a - b);
    priorityQueue.add(3);
    priorityQueue.add(2);
    priorityQueue.add(1);

    expect(priorityQueue.peek()).toEqual(1);

    expect(priorityQueue.poll()).toEqual(1);
    expect(priorityQueue.poll()).toEqual(2);
    expect(priorityQueue.poll()).toEqual(3);
  });

  it("should pass the second test", function () {
    const pq = new PriorityQueue((a: number, b: number) => a - b);
    pq.add(5);
    pq.add(3);
    pq.add(1);
    pq.add(4);
    pq.add(2);
    const result = [];
    while (pq.size() > 0) {
      result.push(pq.poll());
    }

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should pass the third test", function () {
    const pq = new PriorityQueue((a: number, b: number) => b - a);
    pq.add(1);
    expect(pq.peek()).toBe(1);
    expect(pq.size()).toBe(1);
    pq.add(3);
    expect(pq.peek()).toBe(3);
    expect(pq.size()).toBe(2);
    pq.add(4);
    expect(pq.peek()).toBe(4);
    expect(pq.size()).toBe(3);
    expect(pq.poll()).toBe(4);
    expect(pq.peek()).toBe(3);
    expect(pq.size()).toBe(2);
    expect(pq.poll()).toBe(3);
    expect(pq.poll()).toBe(1);
    expect(pq.size()).toBe(0);
    expect(pq.poll()).toBe(undefined);
  });
});
