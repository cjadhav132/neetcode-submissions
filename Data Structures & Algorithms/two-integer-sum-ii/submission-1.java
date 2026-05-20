class Solution {
    public int[] twoSum(int[] numbers, int target) {
        HashMap<Integer, Integer> hashMap = new HashMap<>();
        int[] output = new int[2];

        for (int i = 0; i < numbers.length; i++) {
            System.out.println(i);
            int remainder = target - numbers[i];
            if (hashMap.containsKey(remainder)) {
                output[0] = hashMap.get(remainder) + 1;
                output[1] = i + 1;
                break;
            }
            hashMap.put(numbers[i], i);
        }
        return output;
    }
}
