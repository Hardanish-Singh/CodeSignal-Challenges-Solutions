# CodeSignal: https://app.codesignal.com/arcade/intro/level-2/2mxbGwLzvkTCKAJMG

def isIncreasingSequence(array, flag, index, sequence):
    array.pop(index)
    if sorted(list(set(array))) == array:
        flag = True
    else:
        array.insert(index, sequence[index])
    return flag

def solution(sequence):
    flag = False
    value = sequence[:]
    for i in range(0, len(sequence) - 1):
        if sequence[i] >= sequence[i+1]:
            flag = isIncreasingSequence(value, flag, i, sequence)
            if flag == True: break
            flag = isIncreasingSequence(value, flag, i + 1, sequence)
            if flag == True: break
    return flag