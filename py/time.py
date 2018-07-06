def time_converter(time):
    hours = time[0:2]
    time_endswith_pm = time.endswith('PM')
    def change_hour(hour):
        PM =  (hour + 12) if hour is not 12 else hour
        AM =  (hour + 12) if hour is 12 else hour
        return PM if time_endswith_pm else AM
    return time.replace(hours, change_hour(hours)).lower()


print(time_converter("11:31:15PM"))
print(time_converter("12:00:00PM"))
print(time_converter("12:00:00AM"))
print(time_converter("08:31:15AM"))
print(time_converter("11:21:14AM"))
print(time_converter("12:40:22AM"))
