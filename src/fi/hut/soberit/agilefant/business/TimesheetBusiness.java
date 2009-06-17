package fi.hut.soberit.agilefant.business;

import java.util.List;
import java.util.Set;

import org.joda.time.DateTime;

import fi.hut.soberit.agilefant.util.BacklogTimesheetNode;
import fi.hut.soberit.agilefant.util.TimesheetData;

public interface TimesheetBusiness {
    public List<BacklogTimesheetNode> getRootNodes(TimesheetData sheetData);
    public TimesheetData generateTimesheet(Set<Integer> backlogIds, DateTime startDate, DateTime endDate, Set<Integer> userIds);
}
