// 快速排序
/*
    基本思想是分治思想
        从数列中去取一个数作为基准数
        根据基准数将数列进行分区，小于基准数的放左边，大于基准数的放右边
        重复分区操作，直到各区间只有一个数
    
    时间复杂度：O(nlogn),若初始数列基本有序时，快排退化为冒泡排序
 */
function QuickSort(nums, L, R) {
    if (L < R) {
        let i = L,
            j = R,
            temp = nums[i];
        while (i < j) {
            // 右向左找小于基准值temp的值
            while (i < j && nums[j] >= temp) {
                j--;
            }
            if (i < j) {
                nums[i] = nums[j];
                i++;
            }
            // 从左向右找大于基准值temp的值
            while (i < j && nums[i] < temp) {
                i++;
            }
            if (i < j) {
                nums[j] = nums[i];
                j--;
            }
        }
        // 将基准值填入最后的坑中
        nums[i] = temp;
        // 递归调用，分治法的思想
        QuickSort(nums, L, i - 1);
        QuickSort(nums, i + 1, R);
    }
}